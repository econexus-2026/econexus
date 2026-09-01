import React, { useState, useEffect } from 'react';
import { EcoNexusLogo } from './EcoNexusLogo';
import { Menu, X, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Framework', href: '#framework' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'About Us', href: '#about' },
    { label: 'Training', href: '#training' },
    { label: 'ESG Audit Tool', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#d1fae5]/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#d1fae5]/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <EcoNexusLogo variant="horizontal" size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-[#404944] hover:text-[#064e3b] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#10b981] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064e3b] bg-[#ecfdf5] border border-[#d1fae5] hover:bg-[#d1fae5] px-3.5 py-2 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#10b981]" />
              <span className="hidden md:inline">{COMPANY_CONTACT.phone}</span>
              <span className="md:hidden">Call</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="bg-[#064e3b] text-white hover:bg-[#053e2f] px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-[#ecfdf5] border border-[#d1fae5] flex items-center justify-center text-[#064e3b]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#d1fae5] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-[#003527] p-2.5 rounded-xl hover:bg-[#ecfdf5] hover:text-[#064e3b] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#f1f5f9] flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#ecfdf5] text-[#064e3b] p-3 rounded-xl text-xs font-bold border border-[#d1fae5]"
                >
                  <Phone className="w-4 h-4 text-[#10b981]" />
                  Call {COMPANY_CONTACT.phone}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full bg-[#064e3b] text-white p-3 rounded-xl text-xs font-bold shadow-sm flex items-center justify-center gap-2"
                >
                  Book Assessment
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
