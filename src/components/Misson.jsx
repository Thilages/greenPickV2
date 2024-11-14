import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarbonFootprintLogo from './icons/CarbonFootPrintLogo';
import SustainableLogo from './icons/SustinableLogo';
import EcoChoiseLogo from './icons/EcoChoiseLogo';
import LowEmissionLogo from './icons/LowEmissionLogo';
import WaterLogoLogo from './icons/PollutionLogo';
import EarthHandIcon from './icons/EarthHandLogo';
import CallForAction from './CallForAction';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: '40% bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );

    
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  const renderLogo = (title) => {
    switch (title) {
      case 'Sustainable Impact':
        return <EarthHandIcon className="h-16 w-16 text-white logo" />;
      case 'Carbon Reduction':
        return <CarbonFootprintLogo className="h-16 w-16 text-white logo" />;
      case 'Eco Alternatives':
        return <SustainableLogo className="h-14 w-14 text-white logo" />;
      case 'Cleaner Tomorrow':
        return <LowEmissionLogo className="h-16 w-16 text-white logo" />;
      default:
        return <WaterLogoLogo className="h-16 w-16 text-white logo" />;
    }
  };

  return (
    <div className="bg-xsecondary font-montserrat h-auto relative overflow-hidden pb-10">
      {/* Hero Section */}
      <div className="text-center py-16 text-white">
        <h1 className="text-clamp-hero-title font-bold mb-4">Our Mission</h1>
        <p className="text-clamp-title2 mb-6">Transforming waste into sustainable solutions for a cleaner planet.</p>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center gap-6 mb-16 px-4">
        <WaterLogoLogo className="h-16 w-16 text-white logo" />
        <CarbonFootprintLogo className="h-16 w-16 text-white logo" />
        <EarthHandIcon className="h-[70px] w-[70px] text-white logo" />
        <LowEmissionLogo className="h-16 w-16 text-white logo" />
        <SustainableLogo className="h-16 w-16 text-white logo" />
      </div>

      {/* Infographic Section */}
      <div className="px-4 md:px-8 lg:px-16">
        <h2 className="text-clamp-subtitle font-bold text-white text-center mb-12">Why Our Mission Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {['Sustainable Impact', 'Carbon Reduction', 'Eco Alternatives', 'Cleaner Tomorrow'].map((title, index) => (
            <div
              className="bg-white relative p-6 rounded-lg shadow-lg opacity-0 translate-y-10"
              ref={el => (cardsRef.current[index] = el)}
              key={index}
            >
              <div className="w-[90%] h-[5px] bg-xsecondary absolute"></div>
              <div className="w-20 absolute -top-8 right-3 rounded-full h-20 flex items-center justify-center bg-white">
                {renderLogo(title)}
              </div>
              <h3 className="text-2xl font-semibold mb-2 mt-8">{title}</h3>
              <p className="text-sm md:text-base">
                {title === 'Sustainable Impact' &&
                  'We turn crop waste into eco-friendly products to reduce plastic and improve sustainability.'}
                {title === 'Carbon Reduction' &&
                  'Our process cuts carbon emissions by 30% through material reuse and smart production.'}
                {title === 'Eco Alternatives' &&
                  'We produce biodegradable products that replace single-use plastics and support sustainability.'}
                {title === 'Cleaner Tomorrow' &&
                  'Join us in creating a cleaner future with biodegradable solutions to replace plastic waste.'}
              </p>
              <p className="text-xl font-bold mt-4">
                {title === 'Sustainable Impact'
                  ? '1000+ tons'
                  : title === 'Carbon Reduction'
                  ? '2000 tons'
                  : title === 'Eco Alternatives'
                  ? '5000+'
                  : '50+'}
              </p>
              <p className="text-sm">
                {title === 'Sustainable Impact'
                  ? 'of plastic saved annually.'
                  : title === 'Carbon Reduction'
                  ? 'of CO₂ emissions reduced each year.'
                  : title === 'Eco Alternatives'
                  ? 'biodegradable products created.'
                  : 'community initiatives launched.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <CallForAction /> */}
    </div>
  );
};

export default Mission;
