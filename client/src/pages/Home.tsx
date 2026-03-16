import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Users, Award, TrendingUp, Package, MapPin, Phone, Mail, MapPinIcon, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import RegionalFooter from '@/components/RegionalFooter';
import Footer from '@/components/Footer';
import { useRef } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const businessUnits = [
    {
      icon: Package,
      title: '道路货物运输',
      subtitle: '普通货物 · 整车零担',
      description: '覆盖广西全境，专业的装卸和配送服务',
      stats: '日均运力 1000+ 吨',
    },
    {
      icon: Zap,
      title: '大件物流',
      subtitle: '超限超重 · 专业运输',
      description: '配备专业设备和团队，安全高效的大件运输',
      stats: '承载能力 30-50 吨',
    },
    {
      icon: MapPin,
      title: '洛阳-广西专线',
      subtitle: '每日发车 · 时效稳定',
      description: '主营线路，覆盖广西全境，每日定期发车',
      stats: '运行周期 3-5 天',
    },
    {
      icon: Users,
      title: '广西全境覆盖',
      subtitle: '柳州 · 南宁 · 桂林等',
      description: '覆盖广西主要城市，一站式物流解决方案',
      stats: '覆盖城市 20+ 个',
    },
  ];

  const highlights = [
    { number: '20+', label: '行业经验', icon: Award },
    { number: '200+', label: '运输车队', icon: TrendingUp },
    { number: '500+', label: '活跃客户', icon: Users },
    { number: '30+', label: '服务网点', icon: MapPin },
  ];

  const handleCallClick = () => {
    toast.success('正在拨打电话...');
    window.location.href = 'tel:+8613608665306';
  };

  const handleLearnMore = () => {
    toast.info('向下滚动查看更多信息');
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section - Modern Left-Aligned */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/hero-cargo-logistics_3805f34f.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              汇宇物流 · 专业物流
            </p>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              洛阳至广西<br />
              <span className="text-accent">专业物流运输</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              20年行业经验，200+运输车队，为数千家企业提供安全、高效、可靠的物流运输服务。专业运营洛阳至广西全境的物流运输网络。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleCallClick}
                className="bg-accent hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold"
              >
                <Phone size={20} className="mr-2" />
                拨打电话
              </Button>
              <Button
                onClick={handleLearnMore}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                了解更多 <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Transport Routes Section */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/2 to-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              主营运输线路
            </p>
            <h2 className="text-5xl font-bold text-primary mb-4">
              覆盖广西全境
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              从洛阳出发，为您连接广西的每一个角落
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {businessUnits.map((unit, index) => {
              const Icon = unit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent group cursor-pointer hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Icon size={28} className="text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <ArrowRight size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{unit.title}</h3>
                    <p className="text-sm text-accent font-semibold mb-3">{unit.subtitle}</p>
                    <p className="text-foreground/70 mb-6">{unit.description}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/60">{unit.stats}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                为什么选择我们
              </p>
              <h2 className="text-5xl font-bold text-primary mb-8">
                专业、可靠、高效
              </h2>
              <div className="space-y-6">
                {[
                  { title: '安全保障', desc: '业界领先的安全标准，全面的保险覆盖' },
                  { title: '实时追踪', desc: '先进的GPS追踪系统，全程透明可控' },
                  { title: '专业团队', desc: '经验丰富的驾驶员和物流管理团队' },
                  { title: '优质服务', desc: '24小时客服支持，快速响应您的需求' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1 bg-accent rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="w-full h-96 rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/cargo-warehouse-section-m4tqRzgBs82G9h8636DP8m.webp)',
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactSectionRef} className="py-20 bg-gradient-to-b from-white via-primary/2 to-white">
        <div className="container">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              联系我们
            </p>
            <h2 className="text-4xl font-bold text-primary mb-3">
              快速联系我们
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl mx-auto">
              选择您最方便的方式与我们沟通
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-accent bg-white/80">
                <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">拨打电话</h3>
                <p className="text-sm text-foreground/60 mb-5 min-h-10">
                  直接与我们的客服团队沟通
                </p>
                <div className="space-y-2">
                  <Button
                    onClick={handleCallClick}
                    className="w-full bg-accent hover:bg-red-700 text-white font-semibold text-sm py-2"
                  >
                    +86 13608665306
                  </Button>
                  <Button
                    onClick={() => {
                      toast.success('座机号已复制到剪贴板');
                      navigator.clipboard.writeText('0379-64562777');
                    }}
                    variant="outline"
                    className="w-full font-semibold text-sm py-2"
                  >
                    0379-64562777
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-primary bg-white/80">
                <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">发送邮件</h3>
                <p className="text-sm text-foreground/60 mb-5 min-h-10">
                  详细描述您的物流需求
                </p>
                <Button
                  onClick={() => {
                    toast.success('邮箱已复制到剪贴板');
                    navigator.clipboard.writeText('250123568@qq.com');
                  }}
                  variant="outline"
                  className="w-full font-semibold text-sm py-2"
                >
                  250123568@qq.com
                </Button>
              </Card>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-blue-500 bg-white/80">
                <div className="w-14 h-14 bg-blue-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon size={28} className="text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">公司地址</h3>
                <p className="text-sm text-foreground/60 mb-5 min-h-10">
                  河南省洛阳市老城区<br />金燕物流中心西区50-51号
                </p>
                <Button
                  onClick={() => {
                    toast.success('地址已复制到剪贴板');
                    navigator.clipboard.writeText('河南省洛阳市老城区金燕物流中心西区50-51号');
                  }}
                  variant="outline"
                  className="w-full font-semibold text-sm py-2"
                >
                  一键导航
                </Button>
              </Card>
            </motion.div>

            {/* WeChat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-green-500 bg-white/80">
                <div className="w-14 h-14 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={28} className="text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">微信咨询</h3>
                <p className="text-sm text-foreground/60 mb-5 min-h-10">
                  加微信咨询价格<br />获取专业报价
                </p>
                  <Button
                    onClick={() => {
                      toast.success('微信号已复制到剪贴板');
                      navigator.clipboard.writeText('13608665306');
                    }}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2"
                  >
                    13608665306
                  </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Phone Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-l-4 border-l-accent bg-gradient-to-br from-accent/5 to-transparent">
                <h3 className="text-lg font-bold text-primary mb-4">联系电话</h3>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p><strong>洛阳手机:</strong> +86 13608665306</p>
                  <p><strong>洛阳座机:</strong> 0379-64562777</p>
                  <p><strong>广西电话:</strong> +86 13788123696</p>
                  <p><strong>邮箱:</strong> 250123568@qq.com</p>
                </div>
              </Card>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-l-4 border-l-primary bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="text-lg font-bold text-primary mb-4">工作时间</h3>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p><strong>周一至周六:</strong></p>
                  <p>8:00 - 20:00</p>
                  <p><strong>周日:</strong></p>
                  <p>9:00 - 18:00</p>
                </div>
              </Card>
            </motion.div>

            {/* Service Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-500/5 to-transparent">
                <h3 className="text-lg font-bold text-primary mb-4">服务保障</h3>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>✓ 24小时客服支持</p>
                  <p>✓ 全程GPS追踪</p>
                  <p>✓ 完整保险覆盖</p>
                  <p>✓ 专业物流团队</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <motion.div
          className="container text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">准备发货？</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            联系我们的专业团队，获取实时报价和定制化的物流解决方案
          </p>
          <Button
            size="lg"
            onClick={handleCallClick}
            className="bg-accent hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold"
          >
            立即联系
          </Button>
        </motion.div>
      </section>

      <RegionalFooter />
      <Footer />
    </div>
  );
}
