import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

export default function Fleet() {
  const [, navigate] = useLocation();

  const fleetTypes = [
    {
      name: '厢式货车',
      count: 80,
      capacity: '5-10吨',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/fleet-showcase-hero-dPxpAwj2RDHNzfzoniMDvk.webp',
      description: '适用于一般货物运输，安全可靠',
    },
    {
      name: '平板车',
      count: 60,
      capacity: '15-30吨',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/fleet-showcase-hero-dPxpAwj2RDHNzfzoniMDvk.webp',
      description: '专业运输大件货物和超限货物',
    },
    {
      name: '罐式车',
      count: 35,
      capacity: '10-20吨',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/fleet-showcase-hero-dPxpAwj2RDHNzfzoniMDvk.webp',
      description: '液体货物专业运输，密封安全',
    },
    {
      name: '高栏车',
      count: 45,
      capacity: '8-15吨',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663432560698/hHcwx5XTe3qUmu5ytknmn7/fleet-showcase-hero-dPxpAwj2RDHNzfzoniMDvk.webp',
      description: '散装货物运输，通风透气',
    },
  ];

  const stats = [
    { label: '运输车队', value: '200+' },
    { label: '平均车龄', value: '4.5年' },
    { label: '日运力', value: '1000吨' },
    { label: '服务网点', value: '30+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section - Gradient Background */}
      <section className="relative min-h-96 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/40"></div>
        <motion.div
          className="relative z-10 text-center container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">运输车队</h1>
          <p className="text-xl opacity-90">现代化车队，可靠的运输保障</p>
        </motion.div>
      </section>

      {/* Fleet Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-l-accent">
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-foreground opacity-75">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Types */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">车型介绍</h2>
            <p className="text-lg text-foreground opacity-75">
              多样化的车型满足不同的运输需求
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fleetTypes.map((vehicle, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-t-accent hover:scale-105">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{vehicle.name}</h3>
                    <p className="text-foreground opacity-75 mb-4 text-sm">{vehicle.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground opacity-75">车队数量:</span>
                        <span className="font-bold text-accent">{vehicle.count}辆</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground opacity-75">运力:</span>
                        <span className="font-bold text-accent">{vehicle.capacity}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Maintenance & Safety */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">维护与安全</h2>
            <p className="text-lg text-foreground opacity-75">
              严格的车辆维护标准确保运输安全
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: '定期检测',
                items: [
                  '每周安全检查',
                  '每月维护保养',
                  '每年全面检验',
                  '实时车辆监控',
                ],
              },
              {
                title: '驾驶员管理',
                items: [
                  '专业驾驶员认证',
                  '安全培训计划',
                  '防御性驾驶课程',
                  '持续技能提升',
                ],
              },
            ].map((section, index) => (
              <Card key={index} className="p-8 border-l-4 border-l-accent">
                <h3 className="text-2xl font-bold text-primary mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-5xl font-bold mb-6">准备发货？</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            联系我们的专业团队，获取实时报价和定制化的物流解决方案
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
