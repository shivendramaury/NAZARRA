
import React from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const services = [
    "Website Development",
    "Social Media Management",
    "Content Creation",
    "Digital Marketing",
    "Lead Generation",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#171717] text-white">

      {/* Top CTA */}
      <div className="container-main border-b border-white/10 py-20 sm:py-28">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">

          <div>
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#B69B78]">
              LET'S BUILD SOMETHING
            </span>

            <h2 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Ready to take your business
              <span className="font-serif font-normal italic text-[#B69B78]">
                {" "}further?
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="mb-6 max-w-sm text-sm leading-7 text-white/55">
              Your next stage of growth starts with a conversation.
              Tell us about your business and let's make it happen.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-5 rounded-full bg-[#B69B78] py-2 pl-7 pr-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#A88C69] hover:-translate-y-1"
            >
              Start a Project

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={19} />
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block">
              <span className="font-serif text-4xl font-semibold tracking-[0.12em]">
                NAZARRA<span className="text-[#B69B78]">.</span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
              Digital Growth & AI Solutions.
              Helping businesses build their digital presence,
              connect with people and grow with purpose.
            </p>

            <p className="mt-6 text-xs font-medium tracking-widest text-[#B69B78]">
              GET SEEN. GET REMEMBERED.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#B69B78] hover:bg-[#B69B78] hover:text-white"
              >
                <span className="text-xl font-medium">◎</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#B69B78] hover:bg-[#B69B78] hover:text-white"
              >
                <span className="text-sm font-bold">in</span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@nazarra.in"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#B69B78] hover:bg-[#B69B78] hover:text-white"
              >
                <Mail size={17} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-7 text-xs font-semibold tracking-[0.2em] text-[#B69B78]">
              EXPLORE
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-7 text-xs font-semibold tracking-[0.2em] text-[#B69B78]">
              WHAT WE DO
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-7 text-xs font-semibold tracking-[0.2em] text-[#B69B78]">
              GET IN TOUCH
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:hello@nazarra.in"
                className="group flex items-start gap-3"
              >
                <Mail size={17} className="mt-1 shrink-0 text-[#B69B78]" />
                <span className="text-sm text-white/55 transition-colors group-hover:text-white">
                  hello@nazarra.in
                </span>
              </a>

              <a
                href="https://wa.me/919452792607"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <Phone size={17} className="mt-1 shrink-0 text-[#B69B78]" />
                <span className="text-sm text-white/55 transition-colors group-hover:text-white">
                  WhatsApp Us
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-[#B69B78]" />
                <span className="text-sm leading-6 text-white/55">
                  India
                  <br />
                  Working with businesses everywhere.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-main border-t border-white/10 py-6">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-xs text-white/40">
            © {currentYear} NAZARRA. All rights reserved.
          </p>

          <p className="text-xs text-white/40">
            Built with purpose. Designed for growth.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-[#B69B78]"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#B69B78] group-hover:bg-[#B69B78] group-hover:text-white">
              <ArrowUp size={15} />
            </span>
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
