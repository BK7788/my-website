import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { trpc } from '@/lib/trpc';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    },
    onError: (error) => {
      toast.error(error.message || '提交失败，请稍后重试');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('请填写所有必填项');
      return;
    }

    await submitMutation.mutateAsync(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '电话',
      details: ['+86 13608665306 / 0379-64562777', '专业客服团队'],
    },
    {
      icon: Mail,
      title: '邮箱',
      details: ['250123568@qq.com', '24小时回复'],
    },
    {
      icon: MapPin,
      title: '地址',
      details: ['河南省洛阳市老城区', '金燕物流中心西区50-51号'],
    },
    {
      icon: Clock,
      title: '工作时间',
      details: ['周一至周六: 9:00-18:00', '周日: 10:00-16:00'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <motion.div
          className="container text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">联系我们</h1>
          <p className="text-xl opacity-90">
            有任何问题？我们的专业团队随时准备为您服务
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-primary bg-white/80">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-primary mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground/70 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-b from-white via-primary/2 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/90">
                <h2 className="text-2xl font-bold text-primary mb-6">发送消息</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-foreground font-medium mb-2">姓名 *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="您的姓名"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-2">电话 *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="您的电话"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-foreground font-medium mb-2">邮箱 *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="您的邮箱"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-2">公司名称</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="您的公司名称"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">消息内容 *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="请输入您的消息..."
                      required
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-semibold flex items-center justify-center gap-2"
                  >
                    {submitMutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                    {submitMutation.isPending ? '提交中...' : '发送消息'}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/90 h-full">
                <h2 className="text-2xl font-bold text-primary mb-6">公司位置</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/70 text-sm mb-2">公司地址</p>
                    <p className="text-lg font-semibold text-primary">河南省洛阳市老城区金燕物流中心西区50-51号</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground/70 text-sm mb-2">高德地图导航</p>
                    <a 
                      href="https://amap.com/search?query=河南省洛阳市老城区金燕物流中心西区50-51号"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      打开高德地图
                    </a>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground/70 text-sm mb-2">联系方式</p>
                    <div className="space-y-2">
                      <p className="text-primary font-semibold">电话: +86 13608665306</p>
                      <p className="text-primary font-semibold">邮箱: 250123568@qq.com</p>
                      <p className="text-primary font-semibold">微信: 13608665306</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
