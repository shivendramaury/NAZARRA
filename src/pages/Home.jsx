import React from 'react';
import About from '../components/home/About';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import { useState } from 'react';
import OurWork from '../components/home/OurWork';
import WhatWeDo from '../components/home/WhatWeDo';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <main className="section-light">
      <Navbar />
      <div className="h-24"/>
      <Hero />
      <About />
      <Services />
      <WhatWeDo />
      <OurWork />
      <Footer />

      {/* We'll add the remaining sections here */}
    </main>
  );
};

export default Home;