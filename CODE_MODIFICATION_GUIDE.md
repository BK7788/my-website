# 代码修改指南

本指南说明如何修改导航地址、联系方式和地址信息。

---

## 1. 修改导航菜单地址

**文件位置：** `client/src/components/Navigation.tsx`

**修改位置：** 第 8-14 行

```typescript
const navLinks = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '核心业务', href: '/services' },
  { label: '运输车队', href: '/fleet' },
  { label: '联系我们', href: '/contact' },
];
```

**如何修改：**
- `label` - 导航菜单显示的文字
- `href` - 导航链接的路径

**示例：** 如果想添加"新闻中心"导航项：
```typescript
{ label: '新闻中心', href: '/news' },
```

---

## 2. 修改电话号码

**文件位置：** `client/src/pages/Home.tsx`

### 2.1 拨打电话卡片中的电话号码

**修改位置：** 第 279 行和 284 行

```typescript
// 第 279 行 - 手机号
<Button ... >
  +86 13608665306
</Button>

// 第 284 行 - 座机号
navigator.clipboard.writeText('0379-64562777');
```

**修改方法：** 将 `13608665306` 和 `0379-64562777` 替换为新的电话号码

### 2.2 联系电话信息卡片中的电话号码

**修改位置：** 第 401-404 行

```typescript
<p><strong>手机:</strong> +86 13608665306</p>
<p><strong>座机:</strong> 0379-64562777</p>
<p><strong>邮箱:</strong> 250123568@qq.com</p>
<p><strong>微信:</strong> 13608665306</p>
```

**修改方法：** 直接替换相应的号码和邮箱

---

## 3. 修改地址信息

**文件位置：** `client/src/pages/Home.tsx`

### 3.1 公司地址卡片

**修改位置：** 第 335-341 行

```typescript
<p className="text-sm text-foreground/60 mb-5 min-h-10">
  河南省洛阳市老城区<br />金燕物流中心西区56号
</p>
...
navigator.clipboard.writeText('河南省洛阳市老城区金燕物流中心西区56号');
```

**修改方法：**
1. 第 336 行：修改显示的地址文字
2. 第 341 行：修改复制到剪贴板的地址文字（需要保持一致）

---

## 4. 增添广西办公室地址

**文件位置：** `client/src/pages/Home.tsx`

**修改位置：** 第 323-349 行（地址卡片）之后

**步骤：**

1. 在第 349 行后面添加新的地址卡片代码：

```typescript
{/* Guangxi Office Address Card */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-purple-500 bg-white/80">
    <div className="w-14 h-14 bg-purple-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
      <MapPinIcon size={28} className="text-purple-500" />
    </div>
    <h3 className="text-lg font-bold text-primary mb-2">广西办公室</h3>
    <p className="text-sm text-foreground/60 mb-5 min-h-10">
      广西南宁市青秀区<br />朝阳广场A座1206室
    </p>
    <Button
      onClick={() => {
        toast.success('地址已复制到剪贴板');
        navigator.clipboard.writeText('广西南宁市青秀区朝阳广场A座1206室');
      }}
      variant="outline"
      className="w-full font-semibold text-sm py-2"
    >
      一键导航
    </Button>
  </Card>
</motion.div>
```

2. 修改网格布局（第 253 行）从 `lg:grid-cols-4` 改为 `lg:grid-cols-5`：

```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
```

3. 在联系电话信息卡片（第 382-446 行）中添加广西办公室信息：

```typescript
{/* Guangxi Office Info */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-500/5 to-transparent">
    <h3 className="text-lg font-bold text-primary mb-4">广西办公室</h3>
    <div className="space-y-2 text-sm text-foreground/70">
      <p><strong>地址:</strong> 广西南宁市青秀区朝阳广场A座1206室</p>
      <p><strong>电话:</strong> +86 0771-5555666</p>
      <p><strong>微信:</strong> 13608665307</p>
    </div>
  </Card>
</motion.div>
```

---

## 5. 修改邮箱地址

**文件位置：** `client/src/pages/Home.tsx`

**修改位置：** 第 313 行和 318 行

```typescript
// 第 313 行
navigator.clipboard.writeText('250123568@qq.com');

// 第 318 行
250123568@qq.com
```

**修改方法：** 将 `250123568@qq.com` 替换为新的邮箱地址

---

## 6. 修改微信号

**文件位置：** `client/src/pages/Home.tsx`

**修改位置：** 第 369 行和 373 行

```typescript
// 第 369 行
navigator.clipboard.writeText('13608665306');

// 第 373 行
13608665306
```

**修改方法：** 将 `13608665306` 替换为新的微信号

---

## 修改后的步骤

1. **编辑代码** - 按照上述指南修改相应文件
2. **保存文件** - 保存修改后的文件
3. **查看效果** - 运行 `pnpm dev` 启动开发服务器，在浏览器中查看修改效果
4. **构建部署** - 运行 `pnpm build` 构建生产版本

---

## 快速查找表

| 修改项 | 文件 | 行号 | 说明 |
|--------|------|------|------|
| 导航菜单 | Navigation.tsx | 8-14 | 修改菜单项和链接 |
| 手机号 | Home.tsx | 279, 401 | 拨打电话的手机号 |
| 座机号 | Home.tsx | 284, 402 | 拨打电话的座机号 |
| 邮箱 | Home.tsx | 313, 318, 403 | 发送邮件的邮箱地址 |
| 微信号 | Home.tsx | 369, 373, 404 | 微信咨询的微信号 |
| 洛阳地址 | Home.tsx | 336, 341 | 公司地址信息 |
| 广西地址 | Home.tsx | 新增 | 添加广西办公室地址 |
| 工作时间 | Home.tsx | 419-422 | 营业时间 |

---

## 常见问题

**Q: 修改后页面没有更新？**
A: 确保保存了文件，然后刷新浏览器。如果使用 `pnpm dev`，通常会自动热更新。

**Q: 如何添加第二个办公室地址？**
A: 按照第 4 节"增添广西办公室地址"的步骤，复制相似的代码块并修改相应信息。

**Q: 修改导航后新页面如何创建？**
A: 在 `client/src/pages/` 目录下创建新的 `.tsx` 文件（如 `News.tsx`），然后在 `App.tsx` 中添加路由。

---

有任何问题，欢迎咨询！
