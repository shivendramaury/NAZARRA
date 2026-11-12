
import React from 'react';
import { ArrowUpRight, Globe2, Camera, Megaphone } from 'lucide-react';
const projects = [
  {
    name: 'The Urban Studio',
    category: 'Website Development',
    type: 'E-commerce',
    number: '01',
    icon: Globe2,
    theme: 'bg-[#E9E4DA]',
    accent: '#B69B78',
    description: 'A modern digital storefront for a lifestyle brand.',
  },
  {
    name: 'Maison Interiors',
    category: 'Website Development',
    type: 'Business Website',
    number: '02',
    icon: Globe2,
    theme: 'bg-[#DED9CF]',
    accent: '#8B7963',
    description: 'An elegant online presence for an interior studio.',
  },
  {
    name: 'Daily Dose',
    category: 'Social Media Management',
    type: 'Social Media',
    number: '03',
    icon: Camera,
    theme: 'bg-[#E8DFD4]',
    accent: '#A77B5B',
    description: 'A consistent social identity built to engage.',
  },
  {
    name: 'The Growth Co.',
    category: 'Digital Marketing',
    type: 'Lead Generation',
    number: '04',
    icon: Megaphone,
    theme: 'bg-[#DCDDD5]',
    accent: '#777B63',
    description: 'A campaign concept focused on customer acquisition.',
  },
  {
    name: 'Olive & Oak',
    category: 'Website Development',
    type: 'Brand Website',
    number: '05',
    icon: Globe2,
    theme: 'bg-[#E5DED2]',
    accent: '#8B7359',
    description: 'A refined website concept for a growing brand.',
  },
];

const ProjectCard = ({ project }) => {
  const Icon = project.icon;

  return (
    <article className="group w-[310px] sm:w-[390px] shrink-0">
      {/* Project Preview */}
      <div
        className={`relative h-[260px] sm:h-[310px] overflow-hidden rounded-[22px] ${project.theme} p-5 sm:p-7`}
      >
        {/* Browser Window */}
        <div className="relative h-full overflow-hidden rounded-xl bg-[#F8F7F3] shadow-[0_12px_35px_rgba(0,0,0,0.10)] transition-transform duration-700 group-hover:-translate-y-2">
          {/* Browser Header */}
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#D8B5A7]" />
              <span className="h-2 w-2 rounded-full bg-[#D8C89D]" />
              <span className="h-2 w-2 rounded-full bg-[#B5C1A8]" />
            </div>
            <span className="text-[8px] tracking-widest text-[#999]">
              {project.name.toUpperCase()}.COM
            </span>
            <ArrowUpRight size={13} className="text-[#777]" />
          </div>

          {/* Website Preview */}
          <div className="relative flex h-full flex-col items-center justify-center px-5 pb-10 text-center">
            <div
              className="mb-4 flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: project.accent }}
            >
              <Icon size={19} />
            </div>

            <span className="mb-3 text-[8px] font-semibold tracking-[0.25em] text-[#999]">
              {project.type.toUpperCase()}
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#25231F]">
              {project.name}
            </h3>

            <p className="mt-2 max-w-[220px] text-[10px] leading-relaxed text-[#777]">
              {project.description}
            </p>

            <div className="mt-5 flex gap-2">
              <span
                className="rounded-full px-4 py-2 text-[8px] text-white"
                style={{ backgroundColor: project.accent }}
              >
                Explore More
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2 text-[8px] text-[#555]">
                Discover
              </span>
            </div>

            <div
              className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full opacity-10"
              style={{ backgroundColor: project.accent }}
            />
          </div>
        </div>

        {/* Concept Label */}
        <span className="absolute right-8 top-8 rounded-full bg-white/80 px-3 py-1.5 text-[9px] font-medium tracking-wide text-[#555] backdrop-blur-md">
          CONCEPT PROJECT
        </span>

        <span className="absolute bottom-8 left-8 text-xs font-medium text-[#777]">
          0{project.number}
        </span>
      </div>

      {/* Project Details */}
      <div className="flex items-start justify-between gap-4 px-1 pt-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-[#202020]">
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-[#858585]">
            {project.category}
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E7E4DD] transition-all duration-300 group-hover:border-[#B69B78] group-hover:bg-[#B69B78] group-hover:text-white">
          <ArrowUpRight size={17} />
        </div>
      </div>
    </article>
  );
};

const OurWork = () => {
  return (
    <section id="work" className="section-light overflow-hidden py-24 sm:py-32">

      {/* Section Heading */}
      <div className="container-main mb-14 sm:mb-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B69B78]">
              SELECTED WORK
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
              Ideas turned into
              <span className="font-serif font-normal italic text-[#B69B78]">
                {' '}digital experiences.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#777]">
            A glimpse of the digital experiences we create to help businesses
            build their presence, connect with people and grow.
          </p>
        </div>
      </div>

      {/* Infinite Portfolio Slider */}
      <div className="work-marquee relative">

        {/* First Track */}
        <div className="work-track flex w-max gap-6">
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard
              key={`first-${project.number}-${index}`}
              project={project}
            />
          ))}
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="container-main mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#E7E4DD] pt-8 sm:flex-row">
        <p className="text-sm text-[#777]">
          Have an idea? Let's bring it to life.
        </p>

        <a
          href="#contact"
          className="group inline-flex items-center gap-4 rounded-full bg-[#171717] py-2 pl-6 pr-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#B69B78]"
        >
          Start Your Project
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={17} />
          </span>
        </a>
      </div>

    </section>
  );
};

export default OurWork;
