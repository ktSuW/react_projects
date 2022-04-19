import React from 'react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar'
import Recommend from './components/Recommend';
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Hero/>
      <Services/>
      <Recommend/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
