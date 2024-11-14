import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Mission from './components/Misson'; // Corrected import
import Products from './components/Products';
import Partners from './components/Partners'; // Uncomment if needed
import CallForAction from './components/CallForAction';
import ContactUs from './components/ContactUs';

const Home = () => {
  return (
    <div className='bg-[#eef9eb] border scroll-smooth'>
      <Navbar />
      <div id="home"> {/* Added ID for smooth scrolling */}
        <Hero />
      </div>
      <div id="mission"> {/* Added ID for smooth scrolling */}
        <Mission />
      </div>
      <div id="products"> {/* Added ID for smooth scrolling */}
        <Products />
      </div>
      {/* <div id="partners"> {/* Uncomment and add ID if you use Partners */}
      {/*   <Partners /> */}
      {/* </div> */}
      <CallForAction />
      <div id="contact"> {/* Added ID for smooth scrolling */}
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
