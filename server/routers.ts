import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission, getContactSubmissions } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "姓名不能为空"),
        email: z.string().email("邮箱格式不正确"),
        phone: z.string().min(1, "电话不能为空"),
        company: z.string().optional(),
        message: z.string().min(1, "消息不能为空"),
      }))
      .mutation(async ({ input }) => {
        try {
          // Save to database
          await createContactSubmission({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company || null,
            message: input.message,
          });

          // Notify owner
          await notifyOwner({
            title: "新的联系表单提交",
            content: `来自 ${input.name} (${input.email}) 的新消息：\n\n${input.message}`,
          });

          return { success: true, message: "消息已提交，我们会尽快与您联系" };
        } catch (error) {
          console.error("Contact submission error:", error);
          throw new Error("提交失败，请稍后重试");
        }
      }),
    list: publicProcedure.query(async () => {
      return await getContactSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
