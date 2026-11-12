
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Globe2,
  Target,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

const pillars = [
  {
    number: '01',
    icon: Globe2,
    title: 'Build Your Presence',
    description:
      'Create a professional digital identity that makes your business easy to discover and trust.',
  },
  {
    number: '02',
    icon: Target,
    title: 'Reach The Right People',
    description:
      'Connect your business with the audience that actually needs your products or services.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Grow With Purpose',
    description:
      'Turn online visibility into meaningful enquiries, stronger relationships and business growth.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="section-light relative overflow-hidden py-24 md:py-32"
    >
      <div className="container-main">

        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 accent-text text-sm font-semibold uppercase tracking-[0.2em]">
            <Sparkles size={16} />
            <span>About NAZARRA</span>
          </div>

          <h2 className="font-heading mt-7 text-4xl font-semibold leading-[1.12] tracking-tight text-[#171717] md:text-6xl lg:text-7xl">
            The world is going digital.
            <span className="block accent-text">
              Your business should too.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#777777] md:text-lg">
            Great businesses shouldn't remain hidden just because they
            haven't found their place online. At NAZARRA, we help traditional
            and growing businesses make that transition — from being known
            locally to being discovered digitally.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-8 rounded-2xl bg-[#171717] p-8 md:mt-24 md:grid-cols-2 md:gap-12 md:p-14 lg:p-16"
        >
          <div className="!p-5 !pl-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#B69B78]">
              Our Vision
            </span>

            <h3 className="mt-6 font-heading text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              Make every good business
              <span className="text-[#B69B78]"> impossible to overlook.</span>
            </h3>
          </div>

          <div className="flex flex-col justify-between !p-5 !pr-10">
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              We believe every business deserves the opportunity to grow
              beyond its physical boundaries. Our vision is to make digital
              growth accessible, practical and valuable for businesses of
              every size — not just the big brands.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#B69B78]"
            >
              Let's grow your business
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-[#B69B78] group-hover:bg-[#B69B78] group-hover:text-[#171717]">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>
        </motion.div>

        {/* How We Create Growth */}
        <div className="mt-24 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <span className="accent-text text-xs font-semibold uppercase tracking-[0.2em]">
                What We Believe In
              </span>

              <h3 className="mt-4 font-heading text-3xl font-semibold text-[#171717] md:text-4xl">
                From visibility to growth.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#858585] md:text-base">
              We bring the right digital tools and creative thinking together
              to move your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="group border-t border-[#E7E4DD] py-8 transition-colors hover:border-[#B69B78]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#B69B78]">
                      {pillar.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-[#858585] transition-colors group-hover:text-[#B69B78]"
                    />
                  </div>

                  <h4 className="mt-9 font-heading text-xl font-semibold text-[#171717] md:text-2xl">
                    {pillar.title}
                  </h4>

                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#858585]">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[#E7E4DD] pt-8 md:mt-28 md:flex md:items-center md:justify-between"
        >
          <p className="font-heading text-2xl font-medium text-[#171717] md:text-3xl">
            Your business has a story.
            <span className="accent-text"> Let's make it visible.</span>
          </p>

          <span className="mt-5 inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#858585] md:mt-0">
            NAZARRA — Get Seen. Get Remembered.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default About;