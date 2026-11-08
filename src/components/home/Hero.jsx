
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Clock } from 'lucide-react';

const serviceOptions = [
  'Website Development',
  'Social Media Management',
  'Digital Marketing',
  'Not Sure',
];

const Hero = () => {
  const [selectedService, setSelectedService] = useState('Website Development');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello NAZARRA! I'd like to discuss a project.

Name: ${formData.name}
Contact: ${formData.phone}
Service: ${selectedService}
Message: ${formData.message || 'Not provided'}`;

    const whatsappNumber = '9452792607';

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-[780px] md:min-h-[850px] flex items-center overflow-hidden section-light"
    >
      {/* Background accent */}
      <div className="absolute top-32 right-[-100px] w-[420px] h-[420px] rounded-full bg-[#B69B78]/10 blur-[120px]" />

      <div className="container-main relative z-10 pt-40 lg:pt-36 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* LEFT SIDE - HERO CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[#B69B78]" />
                <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#777777]">
                  Get Seen, Get Remembered.
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-[clamp(3.2rem,6.5vw,6.8rem)] leading-[0.98] tracking-[-0.075em] font-extrabold"
            >
              Your Business.
              <br />
              <span className="text-[#B69B78]">Beyond</span>
              <br />
              Boundaries.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-9 max-w-lg text-base md:text-lg leading-relaxed text-[#77736C]"
            >
              We help ambitious businesses build their digital presence
              through thoughtful design, powerful technology and
              intelligent growth solutions.
            </motion.p>

            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="btn-primary mt-8 w-fit"
            >
              Explore Our Services
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <ArrowUpRight size={17} />
              </span>
            </motion.a>
          </div>

          {/* RIGHT SIDE - ENQUIRY FORM (DESKTOP ONLY) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="rounded-[24px] overflow-hidden border-2 border-[#D8D3C9] bg-white !p-8 xl:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.06)]">

              <div className="mb-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B69B78]">
                  Start a Project
                </span>

                <h2 className="font-heading mt-3 text-3xl font-semibold text-[#171717]">
                  Let's Talk Business.
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-[#858585]">
                  Tell us what you're looking for. We'll take it from there.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium !font-bold text-[#171717]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-[#E7E4DD] bg-white !px-4 !py-3 text-sm outline-none transition-all focus:border-[#B69B78]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium !font-bold text-[#171717]">
                    Contact Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    pattern="[+]?[0-9\s-]{10,15}"
                    required
                    className="w-full rounded-lg border border-[#E7E4DD] bg-white !px-4 !py-3 text-sm outline-none transition-all focus:border-[#B69B78]"
                  />
                </div>

                {/* Service selector */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium !font-bold text-[#171717]">
                    I'm interested in...
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        aria-pressed={selectedService === service}
                        className={`rounded-full border !px-3 !py-1 text-xs font-medium transition-all duration-200 ${
                          selectedService === service
                            ? 'border-[#171717] bg-[#171717] text-white'
                            : 'border-[#E7E4DD] bg-white text-[#171717] hover:border-[#B69B78]'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium !font-bold text-[#171717]">
                    Message <span className="text-[#999999]">(Optional)</span>
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your project..."
                    rows="3"
                    className="w-full resize-none rounded-lg border border-[#E7E4DD] bg-white !px-4 !py-1 text-sm outline-none transition-all focus:border-[#B69B78]"
                  />
                </div>

                {/* Submit */}
                <button
  type="submit"
  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-6 !py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B69B78] hover:shadow-[0_8px_20px_rgba(182,155,120,0.2)]"
>
  Send Enquiry

  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white/25">
    <ArrowUpRight
      size={17}
      className="transition-transform duration-300 group-hover:rotate-[45deg]"
    />
  </span>
</button>

              </form>

              {/* Response time */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <Clock size={14} className="text-[#B69B78]" />
                <p className="text-xs text-[#858585]">
                  Expect a response within 2 hours.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom hero information */}
        <div className="mt-20 lg:mt-24 pt-6 border-t border-[#E7E4DD] flex items-center justify-between">
          <p className="text-xs tracking-widest uppercase text-[#858585]">
            Strategy. Creativity. Technology.
          </p>

          <a
            href="#services"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#77736C] hover:text-[#B69B78] transition-colors"
          >
            Explore <ArrowDown size={15} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
