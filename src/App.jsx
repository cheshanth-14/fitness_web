import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Membership from './sections/Membership';
import Trainers from './sections/Trainers';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainers />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
