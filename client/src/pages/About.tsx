import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: '2006', event: '公司成立，开始道路货物运输业务' },
    { year: '2010', event: '车队规模达到100辆，覆盖中部地区' },
    { year: '2015', event: '建立30个服务网点，进入广西市场' },
            { year: '2024', event: '车队扩展至200+辆，成为行业领先者，每日定时发车' },
    { year: '2026', event: '智能化升级，打造数字物流平台' },
  ];

  const values = [
    { title: '诚信', desc: '透明沟通，履行承诺，建立长期合作' },
    { title: '卓越', desc: '持续改进，追求完美，提供最优体验' },
    { title: '创新', desc: '拥抱技术，优化流程，引领行业发展' },
    { title: '责任', desc: '安全第一，环保意识，社会贡献' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            关于汇宇
          </p>
          <h1 className="text-6xl font-bold mb-6">
            20年专业物流运输
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            从创业初期的小型运输公司，到如今拥有200+车队、覆盖广西全境的物流运输服务商，汇宇一直坚持安全、可靠、高效的服务理念。
          </p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">20年专业运营</h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  洛阳市汇宇汽车运输有限公司成立于2006年，是一家专业从事道路货物运输的企业。在创始人的带领下，我们从一支小型运输队伍起步，逐步发展成为中部地区领先的物流运输服务商。
                </p>
                <p>
                  我们拥有200多辆现代化运输车辆，建立了30多个服务网点，专业运营洛阳至广西全境的物流运输网络。我们对安全、可靠和创新的承诺赢得了数百家企业的信任。
                </p>
                <p>
                  我们相信，优秀的物流不仅仅是运输货物，更是与客户建立长期合作伙伴关系，为他们创造价值。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary text-lg">{item.year}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{item.event}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              核心价值观
            </p>
            <h2 className="text-5xl font-bold text-primary">
              指导我们的原则
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full text-center hover:shadow-lg transition-shadow bg-white border-t-4 border-t-accent">
                  <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: '行业经验' },
              { number: '200+', label: '运输车队' },
              { number: '500+', label: '活跃客户' },
              { number: '30+', label: '服务网点' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              企业信息
            </p>
            <h2 className="text-5xl font-bold text-primary">
              基本信息
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { label: '公司名称', value: '洛阳市汇宇汽车运输有限公司' },
              { label: '成立时间', value: '2006年02月13日' },
              { label: '注册地址', value: '河南省洛阳市老城区金燕物流中心西区50-51号' },
              { label: '经营范围', value: '道路普通货物运输、大件物流运输' },
              { label: '联系电话', value: '+86 13608665306 / 0379-64562777' },
              { label: '企业邮箱', value: '250123568@qq.com' },
            ].map((info, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-l-accent">
                <p className="text-foreground/70 text-sm font-medium mb-2">{info.label}</p>
                <p className="text-foreground font-semibold">{info.value}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              资质认证
            </p>
            <h2 className="text-5xl font-bold text-primary">
              专业认可
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { title: '道路运输经营许可证', desc: '国家颁发的道路运输资质' },
              { title: '安全生产许可证', desc: '符合国家安全生产标准' },
              { title: '行业优秀企业', desc: '2024年物流行业优秀企业' },
            ].map((cert, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-foreground/70 text-sm">{cert.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
