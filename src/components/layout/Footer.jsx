
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="container-main">
        <div className="h-24 flex items-center justify-between">

          {/* Brand */}
          <a href="#home" className="shrink-0">
            <img
              src={logo}
              alt="NAZARRA"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-[#292929] hover:text-[#B69B78] transition-colors duration-300"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-px w-0 bg-[#B69B78] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-4 bg-[#171717] text-white pl-7 pr-1.5 py-1.5 rounded-full text-sm font-medium hover:bg-[#B69B78] transition-colors duration-300 group"
          >
            Start Project

            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={17} />
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-full border border-black/15 flex items-center justify-center"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute left-4 right-4 top-20 bg-[#F5F5F2] border border-[#E7E4DD] rounded-2xl p-6 shadow-xl"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium hover:text-[#B69B78] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-3 bg-[#171717] text-white py-3 rounded-full"
                >
                  Start Project <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
