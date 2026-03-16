import { Link } from 'wouter';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: '首页', href: '/' },
    { label: '关于我们', href: '/about' },
    { label: '核心业务', href: '/services' },
    { label: '运输车队', href: '/fleet' },
    { label: '广西分公司', href: '/guangxi' },
    { label: '联系我们', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">汇</span>
        </div>
          <span className="text-xl font-bold text-primary hidden sm:inline">汇宇物流</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-accent text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium">
          获取报价
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium mt-2">
              获取报价
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
