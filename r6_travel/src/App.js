import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
      nav,
      #hero,
      #destinations,
      #services,
      #testimonials,
      footer
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Recommend />
      <Services />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </>
  );
}
