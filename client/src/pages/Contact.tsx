import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
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

    try {

      await emailjs.send(
        "service_8379lbs",
        "template_7beijnn",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        "BFmJi3118uCQLWgT8"
      );

      toast.success("消息发送成功！");

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

    } catch (error) {

      console.error(error);
      toast.error("发送失败，请稍后再试");

    }
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

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            联系我们
          </h1>

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

                    <h3 className="text-lg font-bold text-primary mb-3">
                      {info.title}
                    </h3>

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


      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-white via-primary/2 to-white">

        <div className="container">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <Card className="p-8 bg-white/90">

                <h2 className="text-2xl font-bold text-primary mb-6">
                  发送消息
                </h2>


                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>

                      <label className="block font-medium mb-2">姓名 *</label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="您的姓名"
                        required
                      />

                    </div>

                    <div>

                      <label className="block font-medium mb-2">电话 *</label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="您的电话"
                        required
                      />

                    </div>

                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>

                      <label className="block font-medium mb-2">邮箱 *</label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="您的邮箱"
                        required
                      />

                    </div>

                    <div>

                      <label className="block font-medium mb-2">公司名称</label>

                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="您的公司名称"
                      />

                    </div>

                  </div>


                  <div>

                    <label className="block font-medium mb-2">消息内容 *</label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="请输入您的消息..."
                      required
                    />

                  </div>


                  <Button
                    type="submit"
                    className="w-full bg-primary text-white py-3 font-semibold"
                  >
                    发送消息
                  </Button>

                </form>

              </Card>

            </motion.div>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}