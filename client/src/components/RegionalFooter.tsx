import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function RegionalFooter() {
  const handleCallLuoyang = () => {
    toast.success('正在拨打洛阳电话...');
    window.location.href = 'tel:+8613608665306';
  };

  const handleCallGuangxi = () => {
    toast.success('正在拨打广西电话...');
    window.location.href = 'tel:+8613788123696';
  };

  const handleNavigateGaodeLuoyang = () => {
    const address = '河南省洛阳市老城区金燕物流中心西区50-51号';
    const gaodeUrl = `https://amap.com/search?query=${encodeURIComponent(address)}&city=洛阳`;
    window.open(gaodeUrl, '_blank');
    toast.success('正在打开高德地图...');
  };

  const handleNavigateGaodeGuangxi = () => {
    const address = '广西壮族自治区柳州市柳江区传承南路';
    const gaodeUrl = `https://amap.com/search?query=${encodeURIComponent(address)}&city=柳州`;
    window.open(gaodeUrl, '_blank');
    toast.success('正在打开高德地图...');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary mb-2">
            全国联系方式
          </h3>
          <p className="text-foreground/60">
            选择最近的办公室联系我们
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Luoyang Office */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">洛</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">洛阳总部</h4>
                  <p className="text-sm text-foreground/60">河南省洛阳市</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3">
                  <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      公司地址
                    </p>
                    <p className="text-sm text-foreground/70 mb-3">
                      河南省洛阳市老城区<br />
                      金燕物流中心西区50-51号
                    </p>
                    <Button
                      onClick={handleNavigateGaodeLuoyang}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2"
                    >
                      高德导航
                    </Button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      联系电话
                    </p>
                    <div className="space-y-2">
                      <Button
                        onClick={handleCallLuoyang}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2"
                      >
                        +86 13608665306
                      </Button>
                      <Button
                        onClick={() => {
                          toast.success('座机号已复制到剪贴板');
                          navigator.clipboard.writeText('0379-64562777');
                        }}
                        variant="outline"
                        className="w-full text-sm py-2"
                      >
                        0379-64562777
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      邮箱
                    </p>
                    <Button
                      onClick={() => {
                        toast.success('邮箱已复制到剪贴板');
                        navigator.clipboard.writeText('250123568@qq.com');
                      }}
                      variant="outline"
                      className="w-full text-sm py-2"
                    >
                      250123568@qq.com
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Guangxi Office */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-orange-50 to-yellow-100/50 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">广</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">广西分公司</h4>
                  <p className="text-sm text-foreground/60">广西壮族自治区柳州市</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3">
                  <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      公司地址
                    </p>
                    <p className="text-sm text-foreground/70 mb-3">
                      广西壮族自治区<br />柳州市柳江区传承南路
                    </p>
                    <Button
                      onClick={handleNavigateGaodeGuangxi}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2"
                    >
                      高德导航
                    </Button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      联系电话
                    </p>
                    <Button
                      onClick={handleCallGuangxi}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2"
                    >
                      +86 13788123696
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      邮箱
                    </p>
                    <Button
                      onClick={() => {
                        toast.success('邮箱已复制到剪贴板');
                        navigator.clipboard.writeText('250123568@qq.com');
                      }}
                      variant="outline"
                      className="w-full text-sm py-2"
                    >
                      250123568@qq.com
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
