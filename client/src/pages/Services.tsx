import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Package, Globe, Settings, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

export default function Services() {
  const [, navigate] = useLocation();

  const services = [
    {
      icon: Truck,
      title: '道路普通货物运输',
      description: '全方位的地面运输解决方案',
      features: [
        '整车运输（FTL）',
        '零担运输（LTL）',
        '专线运输服务',
        '温控货物运输',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/hero-cargo-logistics-UeMaG5kQQLgNVtREYid6sD.webp',
    },
    {
      icon: Package,
      title: '大件物流运输',
      description: '超大超重货物专业运输',
      features: [
        '大件货物专业运输',
        '超限超重审批',
        '专业装卸团队',
        '全程保险保障',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/fleet-showcase-hero-dPxpAwj2RDHNzfzoniMDvk.webp',
    },
    {
      icon: Globe,
      title: '洛阳-广西专线',
      description: '固定专线，每日发车',
      features: [
        '每日定期发车',
        '时效稳定可靠',
        '价格优惠',
        '专业的线路管理',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/truck-route-background-VS2kAJNHBFqKG32o4omtWm.webp',
    },
    {
      icon: Settings,
      title: '广西全境覆盖',
      description: '柳州、南宁、桂林等主要城市',
      features: [
        '柳州运输线路',
        '南宁运输线路',
        '桂林运输线路',
        '一站式物流解决方案',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/cargo-warehouse-section-m4tqRzgBs82G9h8636DP8m.webp',
    },
  ];

  const process = [
    { step: '1', title: '获取报价', desc: '提交货物信息，获得实时报价' },
    { step: '2', title: '确认订单', desc: '确认价格和运输时间' },
    { step: '3', title: '上门提货', desc: '按时上门收货和装车' },
    { step: '4', title: '实时追踪', desc: '全程GPS追踪，透明可控' },
    { step: '5', title: '安全送达', desc: '准时送达目的地' },
    { step: '6', title: '售后服务', desc: '完善的售后服务保障' },
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
            核心业务
          </p>
          <h1 className="text-6xl font-bold mb-6">
            我们的服务
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            全方位的物流运输解决方案，满足您的所有需求
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-none">
                    {/* Image */}
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                          <p className="text-foreground/70 text-sm mt-1">{service.description}</p>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8 flex-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        onClick={() => navigate('/contact')}
                        className="w-full bg-primary hover:bg-primary/90 group"
                      >
                        了解详情
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              运输流程
            </p>
            <h2 className="text-5xl font-bold text-primary">
              简单透明的流程
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-accent mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Coverage Section */}
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
              服务范围
            </p>
            <h2 className="text-5xl font-bold text-primary">
              覆盖广西全境
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
              { region: '主营线路', areas: '洛阳 ↔ 广西', desc: '定期发车，时效稳定' },
              { region: '覆盖地区', areas: '广西全境', desc: '柳州、南宁、桂林等' },
              { region: '服务网点', areas: '30+ 个', desc: '遍布广西主要地区' },
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <p className="text-accent text-sm font-semibold uppercase mb-2">{item.region}</p>
                <p className="text-3xl font-bold text-primary mb-2">{item.areas}</p>
                <p className="text-foreground/70">{item.desc}</p>
              </Card>
            ))}
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
          <h2 className="text-5xl font-bold mb-6">需要定制化解决方案？</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            联系我们的专业团队，讨论您的具体需求
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg" 
            className="bg-accent hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold"
          >
            立即联系
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
