
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-[#F5F5F2]/75 backdrop-blur-xl border-b border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.035)]'
          : 'bg-[#F5F5F2]/30 backdrop-blur-md'
      }`}
    >
      <nav className="container-main">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-[76px]' : 'h-24'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="shrink-0">
            <img
              src={logo}
              alt="NAZARRA"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? 'h-10' : 'h-12'
              }`}
            />
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-[#292929] hover:text-[#B69B78] transition-colors duration-300"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-px w-0 bg-[#B69B78] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-4 bg-[#171717] text-white !pl-7 pr-1.5 py-1.5 rounded-full text-sm font-medium hover:bg-[#B69B78] transition-colors duration-300 group"
          >
            Start Project

            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-full border border-black/10 bg-white/30 backdrop-blur-sm flex items-center justify-center text-[#171717]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden px-4 pb-4"
          >
            <div className="mobile-menu-panel rounded-2xl p-6">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-[#292929] hover:text-[#B69B78] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mobile-cta"
                >
                  Start Project
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
