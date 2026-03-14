import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">洛阳市汇宇汽车运输有限公司</h3>
            <p className="text-sm opacity-90">
              专业从事道路普通货物运输和大件物流运输，主营洛阳至广西全境线路，20年行业经验。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">快速导航</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:opacity-80 transition">首页</a></li>
              <li><a href="/about" className="hover:opacity-80 transition">关于我们</a></li>
              <li><a href="/services" className="hover:opacity-80 transition">核心业务</a></li>
              <li><a href="/fleet" className="hover:opacity-80 transition">运输车队</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">主营业务</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80 transition">道路普通货物运输</a></li>
              <li><a href="#" className="hover:opacity-80 transition">大件物流运输</a></li>
              <li><a href="#" className="hover:opacity-80 transition">洛阳-广西专线</a></li>
              <li><a href="#" className="hover:opacity-80 transition">广西全境覆盖</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">联系我们</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+86 13608665306</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>0379-64562777</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>250123568@qq.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>河南省洛阳市老城区金燕物流中心西区56号</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <p className="text-center text-sm opacity-75">
            &copy; 2026 洛阳市汇宇汽车运输有限公司 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
}
