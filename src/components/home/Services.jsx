
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Share2,
  TrendingUp,
  Check,
} from 'lucide-react';

const WHATSAPP_NUMBER = '9452792607';
const services = [
  {
    number: '01',
    title: 'Website Development',
    subtitle: 'Your business, built for the digital world.',
    description:
      'We create professional, responsive websites that showcase your business, build customer trust and turn visitors into enquiries.',
    icon: Code2,
    features: [
      'Business & service websites',
      'Landing pages',
      'Responsive design',
      'SEO-friendly development',
    ],
    outcome: 'Establish a strong online presence',
    whatsappMessage: "Hey NAZARRA! I'm interested in your website development services. Let's discuss my project!",
  },
  {
    number: '02',
    title: 'Social Media Management',
    subtitle: 'Stay visible. Stay connected.',
    description:
      'We manage your social media presence with thoughtful content and consistent communication that helps your brand connect with the right audience.',
    icon: Share2,
    features: [
      'Social media strategy',
      'Creative posts & reels',
      'Content planning',
      'Page management',
    ],
    outcome: 'Build recognition and customer trust',
    whatsappMessage: "Hey NAZARRA! I'm interested in your social media management services. Let's discuss growing my business online!",
  },
  {
    number: '03',
    title: 'Digital Marketing & Lead Generation',
    subtitle: 'Turn attention into opportunities.',
    description:
      'We help your business reach potential customers through targeted campaigns and digital strategies designed to generate relevant enquiries.',
    icon: TrendingUp,
    features: [
      'Meta & Google Ads',
      'Local SEO',
      'Lead generation campaigns',
      'Campaign optimisation',
    ],
    outcome: 'Attract customers and generate enquiries',
    whatsappMessage: "Hey NAZARRA! I'm interested in your digital marketing services. Let's discuss generating more leads for my business!",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="section-soft relative overflow-hidden py-24 md:py-32"
    >
      <div className="container-main relative z-10">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-16 md:mb-20">

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#B69B78]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#858585]">
                What We Do
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-[#171717] sm:text-5xl md:text-6xl"
            >
              Everything You Need
              <br />
              To <span className="text-[#B69B78]">Grow Digitally.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-md text-base leading-relaxed text-[#77736C]"
          >
            Three essential services. One clear purpose — helping your
            business build its presence, reach more people and grow online.
          </motion.p>
        </div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.a
                key={service.number}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group flex min-h-[480px] flex-col rounded-2xl border border-[#E7E4DD] bg-[#F5F5F2] !p-7 transition-all duration-300 hover:border-[#B69B78]/70 hover:shadow-[0_18px_45px_rgba(0,0,0,0.045)] md:p-8"
              >

                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECEBE6] text-[#171717] transition-all duration-300 group-hover:bg-[#B69B78] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <span className="text-sm tracking-widest text-[#B5B0A6]">
                    / {service.number}
                  </span>
                </div>

                {/* Main Content */}
                <div className="mt-10 flex-1">
                  <h3 className="font-heading text-2xl font-semibold leading-tight text-[#171717]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-[#9B805E]">
                    {service.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#77736C]">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-7 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-[#55534E]"
                      >
                        <Check
                          size={15}
                          className="shrink-0 text-[#B69B78]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="mt-9 flex items-center justify-between gap-3 border-t border-[#E7E4DD] pt-6">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-[#99948A]">
                      The outcome
                    </span>
                    <span className="mt-2 block text-xs font-medium text-[#171717]">
                      {service.outcome}
                    </span>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7E4DD] transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[#E0DED7] pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-heading text-xl font-medium text-[#171717]">
              Not sure what your business needs?
            </p>
            <p className="mt-2 text-sm text-[#858585]">
              Let's understand your goals and find the right direction.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border-b border-[#B69B78] pb-2 text-sm font-semibold text-[#171717] transition-colors duration-300 hover:text-[#9B805E]"
          >
            Let's Discuss Your Business
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;