import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import RecycleLogo from "./icons/RecycledIcons";
import CarbonIcons from "./icons/CarbonIcons";
import Problems from "./Problems";
import { useSpring, animated } from 'react-spring'; // Import react-spring

const Hero = () => {
  const element = useRef(null);
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });

  useEffect(() => {
    const typedElement = new Typed(element.current, {
      strings: ["Sustain.", "Recycle.", "Innovate."],
      startDelay: 200,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typedElement.destroy();
    };
  }, []);

  return (
    // Home container
    <div className="flex flex-col md:flex-row items-center px-3 sm:p-4 md:px-10 mt-16 h-auto">
      {/* Left Side */}
      <div className="lg:w-1/3 md:w-1/2 space-y-4 pt-5 text-center md:text-left">
        {/* About Us Section */}
        <div>
          <h1 className="font-montserrat text-clamp-title2 text-gray-600">
            Turning waste into solutions, one product at a time.
          </h1>
          <h1 className="font-poppins font-bold text-xprimary my-4 text-clamp-hero-title">
            We <span className="font-normal italic" ref={element}></span>
          </h1>
          <animated.p style={fadeInProps} className="hidden  sm:block font-poppins font-light text-gray-600 text-clamp-paragraph">
            We're on a mission to replace single-use plastics with eco-friendly,
            reusable products made from agricultural waste. Together, we can
            reduce pollution and protect the planet.
          </animated.p>
        </div>

        {/* Stats Section */}
        <div className="border-gray-300 w-full mx-auto md:mx-0 font-montserrat text-white flex justify-center">
          <div className="w-[90%] md:w-full">
            <div className="space-y-3">
              {/* Stat Card 1 */}
              <animated.div style={fadeInProps} className="flex items-center py-4 px-3 rounded-lg text-xprimary">
                <RecycleLogo className="w-10 h-10 sm:w-14 sm:h-14 mr-4" />
                <div>
                  <h2 className="text-clamp-stats-number font-semibold">1,000,000+</h2>
                  <p className="text-clamp-stats-label">Single-use plastics avoided</p>
                </div>
              </animated.div>

              {/* Divider */}
              <div className="h-[1px] w-[70%] mx-auto md:mx-0 bg-xprimary"></div>

              {/* Stat Card 2 */}
              <animated.div style={fadeInProps} className="flex items-center py-4 px-3 rounded-lg text-xprimary">
                <CarbonIcons className="w-10 h-10 sm:w-14 sm:h-14 mr-4" />
                <div>
                  <h2 className="text-clamp-stats-number font-semibold">500,000 Kg</h2>
                  <p className="text-clamp-stats-label">Carbon footprint reduced</p>
                </div>
              </animated.div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-2/3  lg:mt-0 max-sm:p-0 rounded-xl p-4 h-full">
        <h1 className="font-montserrat font-semibold text-center text-xprimary text-clamp-hero-title">
          SOLUTIONS <span className="font-light text-clamp-subtitle">WE PROVIDE</span>
        </h1>
        <Problems />
      </div>
    </div>
  );
};

export default Hero;
