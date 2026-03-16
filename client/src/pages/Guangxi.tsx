import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Truck, Award, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import RegionalFooter from '@/components/RegionalFooter';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function Guangxi() {
  const handleNavigateGaode = () => {
    // 高德地图导航链接 - 广西柳州
    const address = '广西壮族自治区柳州市柳江区传承南路';
    const gaodeUrl = `https://amap.com/search?query=${encodeURIComponent(address)}&city=柳州`;
    window.open(gaodeUrl, '_blank');
    toast.success('正在打开高德地图...');
  };

  const handleCallClick = () => {
    toast.success('正在拨打电话...');
    window.location.href = 'tel:+8613788123696';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/VKSgWSb0ItqQ_57620477.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-yellow-900/40"></div>
        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-300 text-sm font-semibold uppercase tracking-widest mb-4">
              汇宇物流 · 广西分公司
            </p>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              广西柳州<br />
              <span className="text-yellow-300">运输枢纽中心</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              汇宇物流广西分公司位于柳州市，是我们在广西的重要运输枢纽。专业覆盖广西全境，为您提供高效、可靠的物流运输服务。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleCallClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold"
              >
                <Phone size={20} className="mr-2" />
                拨打电话
              </Button>
              <Button
                onClick={handleNavigateGaode}
                className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 px-8 py-6 text-lg font-semibold"
              >
                <MapPin size={20} className="mr-2" />
                高德导航
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
              关于我们
            </p>
            <h2 className="text-5xl font-bold text-primary mb-4">
              广西运输中心
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              汇宇物流在广西的专业运输基地，为广西及周边地区提供一站式物流解决方案
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary mb-6">
                广西分公司优势
              </h3>
              <div className="space-y-4">
                {[
                  { title: '地理位置优越', desc: '位于柳州市，是广西的交通枢纽，覆盖广西全境' },
                  { title: '运力充足', desc: '配备专业运输车队，日均运力 500+ 吨' },
                  { title: '服务网络完善', desc: '覆盖广西主要城市，包括南宁、桂林、北海等' },
                  { title: '专业团队', desc: '经验丰富的管理团队和驾驶员队伍' },
                  { title: '24小时服务', desc: '全天候客服支持，快速响应您的需求' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: '500+', label: '日均运力（吨）', icon: Truck },
                { number: '20+', label: '覆盖城市', icon: MapPin },
                { number: '100+', label: '运输车队', icon: TrendingUp },
                { number: '24h', label: '客服支持', icon: Clock },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 text-center bg-gradient-to-br from-orange-500/10 to-yellow-300/10 border border-orange-200">
                      <Icon size={32} className="text-orange-500 mx-auto mb-3" />
                      <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                      <p className="text-sm text-foreground/70">{stat.label}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
              服务范围
            </p>
            <h2 className="text-5xl font-bold text-primary mb-4">
              广西运输服务
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { title: '普通货物运输', desc: '覆盖广西全境的普通货物运输服务' },
              { title: '大件物流', desc: '超限超重货物的专业运输' },
              { title: '冷链运输', desc: '温度控制的冷链物流服务' },
              { title: '仓储配送', desc: '专业的仓储和配送一体化服务' },
              { title: '整车运输', desc: '整车包车运输服务' },
              { title: '零担配送', desc: '零散货物的配送服务' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 group cursor-pointer hover:bg-gradient-to-br hover:from-orange-500/5 hover:to-yellow-300/5">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-50">
        <div className="container">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">
              联系我们
            </p>
            <h2 className="text-4xl font-bold text-primary mb-3">
              广西分公司联系方式
            </h2>
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
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-orange-500 bg-white/80">
                <div className="w-14 h-14 bg-orange-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={28} className="text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">拨打电话</h3>
                <p className="text-sm text-foreground/60 mb-5 min-h-10">
                  直接与我们的客服团队沟通
                </p>
                <Button
                  onClick={handleCallClick}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-2"
                >
                  +86 13788123696
                </Button>
              </Card>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-blue-500 bg-white/80">
                <div className="w-14 h-14 bg-blue-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={28} className="text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">公司地址</h3>
                <p className="text-sm text-foreground/60 mb-5 min-h-10">
                  广西壮族自治区<br />柳州市柳江区传承南路
                </p>
                <Button
                  onClick={handleNavigateGaode}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2"
                >
                  高德导航
                </Button>
              </Card>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-green-500 bg-white/80">
                <div className="w-14 h-14 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={28} className="text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">工作时间</h3>
                <p className="text-sm text-foreground/60 mb-5 min-h-10">
                  周一至周六<br />8:00 - 20:00
                </p>
                <Button
                  disabled
                  variant="outline"
                  className="w-full font-semibold text-sm py-2"
                >
                  24小时服务
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <motion.div
          className="container text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">准备发货？</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            联系我们的广西分公司，获取实时报价和定制化的物流解决方案
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={handleCallClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
            >
              立即联系
            </Button>
            <Button
              onClick={handleNavigateGaode}
              className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 px-8 py-3 text-lg font-semibold"
            >
              高德导航
            </Button>
          </div>
        </motion.div>
      </section>

      <RegionalFooter />
      <Footer />
    </div>
  );
}
