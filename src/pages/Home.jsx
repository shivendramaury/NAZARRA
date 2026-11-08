import React from 'react';
import About from '../components/home/About';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import { useState } from 'react';

const Home = () => {
  return (
    <main className="section-light">
      <Navbar />
      <Hero />
      <About />
      <Services />

      {/* We'll add the remaining sections here */}
    </main>
  );
};

export default Home;