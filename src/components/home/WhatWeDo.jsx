
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  CameraIcon,
  TrendingUp,
  MousePointer2,
  BarChart3,
  Eye,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Build Your Digital Presence",
    subtitle: "WEBSITE DEVELOPMENT",
    description:
      "Turn your business into a professional online destination that builds trust and brings customers closer.",
    icon: Globe,
    type: "website",
    color: "#EAE5DC",
  },
  {
    number: "02",
    title: "Make Your Brand Visible",
    subtitle: "SOCIAL MEDIA MANAGEMENT",
    description:
      "Create a consistent social presence with engaging posts, reels and content that people remember.",
    icon: CameraIcon,
    type: "social",
    color: "#E8E1D8",
  },
  {
    number: "03",
    title: "Turn Attention Into Growth",
    subtitle: "DIGITAL MARKETING",
    description:
      "Reach the right audience, attract potential customers and generate meaningful business enquiries.",
    icon: TrendingUp,
    type: "marketing",
    color: "#E4E5DC",
  },
];

const WebsiteVisual = () => (
  <div className="relative h-full overflow-hidden rounded-xl bg-[#F8F7F3] p-4">
    <div className="flex items-center justify-between border-b border-black/10 pb-3">
      <span className="font-serif text-sm font-bold tracking-wider">ATELIER.</span>
      <div className="flex gap-3 text-[8px] text-[#777]">
        <span>HOME</span><span>SHOP</span><span>ABOUT</span>
      </div>
    </div>
    <div className="grid grid-cols-2 items-center gap-3 pt-6">
      <div>
        <span className="text-[8px] tracking-widest text-[#9A8063]">
          DISCOVER MORE
        </span>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-[#29251F]">
          Designed for everyday living.
        </h3>
        <div className="mt-4 inline-block rounded-full bg-[#24231F] px-4 py-2 text-[8px] text-white">
          EXPLORE COLLECTION
        </div>
      </div>
      <div className="flex h-36 items-center justify-center overflow-hidden rounded-lg bg-[#DDD2C2]">
        <div className="h-24 w-20 rounded-t-full bg-[#A58D70] shadow-xl" />
      </div>
    </div>
    <div className="mt-5 flex gap-2">
      {[1, 2, 3].map((item) => (
        <div key={item} className="h-12 flex-1 rounded-md bg-[#EAE6DE] p-2">
          <div className="h-2 w-8 rounded bg-[#B8A68E]" />
          <div className="mt-2 h-1 w-full rounded bg-[#D1C9BC]" />
        </div>
      ))}
    </div>
    <span className="absolute bottom-3 right-3 text-[8px] text-[#999]">
      WEBSITE PREVIEW
    </span>
  </div>
);

const SocialVisual = () => (
  <div className="relative flex h-full items-center justify-center overflow-hidden rounded-xl bg-[#F8F7F3] p-4">
    <div className="w-[85%] rounded-xl border border-black/10 bg-white p-3 shadow-lg">
      <div className="flex items-center gap-2 border-b border-black/5 pb-3">
        <div className="h-8 w-8 rounded-full bg-[#B69B78]" />
        <div>
          <p className="text-[9px] font-semibold">yourbusiness</p>
          <p className="text-[7px] text-[#999]">Your brand, your story.</p>
        </div>
        <span className="ml-auto text-xs">•••</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 py-3">
        <div className="flex aspect-square items-center justify-center bg-[#D8C8B5]">
          <span className="font-serif text-xl">01</span>
        </div>
        <div className="flex aspect-square items-center justify-center bg-[#34332E] text-white">
          <span className="font-serif text-xs">YOUR<br/>BRAND</span>
        </div>
        <div className="flex aspect-square items-center justify-center bg-[#E9E2D6]">
          <Eye size={22}/>
        </div>
        <div className="aspect-square bg-[#C3B09A]"/>
        <div className="flex aspect-square items-center justify-center bg-[#EEECE6]">
          <span className="font-serif text-sm">Create.</span>
        </div>
        <div className="aspect-square bg-[#8F806B]"/>
      </div>
      <div className="flex justify-between px-1 text-[9px] text-[#555]">
        <span>♡ 2.4k likes</span>
        <span>◉ 18.6k reach</span>
      </div>
    </div>
    <div className="absolute bottom-5 right-4 rounded-lg bg-white px-3 py-2 shadow-md">
      <p className="text-[8px] text-[#999]">CONTENT STRATEGY</p>
      <p className="text-xs font-semibold">Plan. Create. Grow.</p>
    </div>
  </div>
);

const MarketingVisual = () => (
  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-[#F8F7F3] p-5">
    <div className="flex items-center justify-between">
      <span className="text-[9px] font-semibold tracking-widest text-[#777]">
        CAMPAIGN OVERVIEW
      </span>
      <BarChart3 size={17}/>
    </div>
    <div>
      <p className="text-[10px] text-[#999]">Campaign performance</p>
      <h3 className="mt-1 text-3xl font-semibold text-[#25231F]">
        Grow smarter.
      </h3>
      <div className="mt-5 flex h-24 items-end gap-2">
        {[30, 45, 36, 65, 53, 82, 70, 95, 76, 100].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="flex-1 rounded-t-sm bg-[#B69B78]"
          />
        ))}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg bg-[#EAE6DE] p-3">
        <Eye size={14}/>
        <p className="mt-2 text-lg font-semibold">Reach</p>
        <p className="text-[8px] text-[#888]">Find your audience</p>
      </div>
      <div className="rounded-lg bg-[#EAE6DE] p-3">
        <MousePointer2 size={14}/>
        <p className="mt-2 text-lg font-semibold">Leads</p>
        <p className="text-[8px] text-[#888]">Generate enquiries</p>
      </div>
    </div>
    <span className="text-[8px] text-[#999]">
      ILLUSTRATIVE CAMPAIGN DASHBOARD
    </span>
  </div>
);

const visualComponents = {
  website: WebsiteVisual,
  social: SocialVisual,
  marketing: MarketingVisual,
};

const WhatWeDo = () => {
  return (
    <section className="section-soft overflow-hidden py-24 sm:py-32">
      <div className="container-main">

        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#B69B78]">
            WHAT WE DO
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
            We turn your business into
            <span className="font-serif font-normal italic text-[#B69B78]">
              {" "}a digital experience.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#777]">
            From building your online presence to reaching the right people,
            we help your business move forward in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Visual = visualComponents[service.type];

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group overflow-hidden rounded-3xl border border-[#E7E4DD] bg-[#F5F5F2] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] sm:p-5"
              >
                <div
                  className="relative h-[245px] overflow-hidden rounded-[16px] p-3"
                  style={{ backgroundColor: service.color }}
                >
                  <Visual />
                </div>

                <div className="px-1 pb-2 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#B69B78]">
                      {service.subtitle}
                    </span>
                    <span className="text-xs text-[#999]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#202020]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#858585]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E7E4DD] pt-4">
                    <span className="text-xs font-medium text-[#555]">
                      Explore our services
                    </span>
                    <ArrowUpRight
                      size={19}
                      className="text-[#B69B78] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#171717] px-7 py-8 text-white sm:flex-row sm:px-10">
          <div>
            <p className="font-serif text-2xl">
              Your business has potential. Let's unlock it.
            </p>
            <p className="mt-2 text-xs text-white/55">
              One digital partner. Everything your business needs to grow.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#B69B78] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#9F8565]"
          >
            Let's Talk
            <ArrowUpRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
