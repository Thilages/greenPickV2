import React, { useState } from "react";
import cropburning from "../assets/cropburing_low.jpeg";
import useWindowWidth from "./useWindowWidth";
import plasticPolution from "../assets/plasticpollution_low.jpeg";
import { useSpring, animated } from 'react-spring'; // Import react-spring for animation

const Problems = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const windowWidth = useWindowWidth(); // Get the window width

  const problems = [
    {
      title: "Crop Burning",
      description:
        "Crop burning contributes to 40% of air pollution in northern India during winter, releasing 150 million tons of carbon dioxide annually. This practice generates harmful pollutants that degrade air quality, impact public health, and reduce soil fertility.",
      image: cropburning,
      number: 40, // Example number for animation
    },
    {
      title: "Plastic Pollution",
      description:
        "Over 8 million tons of plastic enter the oceans yearly, making up 80% of marine debris. This pollution kills 1 million marine animals annually and, if unchecked, could rise to 29 million tons by 2040.",
      image: plasticPolution,
      number: 80, // Example number for animation
    },
  ];

  const handleMouseEnter = (index) => {
    setExpandedCard(index);
  };

  const handleMouseLeave = () => {
    setExpandedCard(null);
  };

  const AnimatedNumber = ({ number }) => {
    const props = useSpring({ to: { value: number }, from: { value: 0 }, config: { duration: 1000 } });
    return <animated.span>{props.value.to(n => Math.floor(n))}</animated.span>;
  };

  const AnimatedText = ({ children, isVisible }) => {
    const props = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Move up
      config: { tension: 250, friction: 20 },
    });
    return <animated.div style={props}>{children}</animated.div>;
  };

  return (
    <div className="flex flex-col font-poppins text-center lg:gap-6 p-4">
      {problems.map((problem, index) => (
        <div
          key={index}
          className={`relative bg-cover bg-center p-6 rounded-lg shadow-md mb-4 lg:mb-0 transition-all duration-300 cursor-pointer overflow-hidden transform max-sm:hover:scale-100 hover:shadow-xl`} // Hover effects here
          style={{
            backgroundImage: `url(${problem.image})`,
            height: expandedCard === index ? "auto" : windowWidth < 768 ? "auto" : "200px",
            width: "100%",
            backgroundSize: "cover",
          }}
          onMouseEnter={() => handleMouseEnter(index)} // Change to onMouseEnter
          onMouseLeave={handleMouseLeave} // Add onMouseLeave
        >
          <div className="absolute inset-0 bg-xprimary bg-opacity-60 transition-all duration-300 hover:bg-xdarkSec hover:bg-opacity-40" />

          <div className={`flex flex-col ${expandedCard === index ? 'lg:flex-row' : 'flex-col'} justify-center items-center h-full text-center transition-all duration-300`}>
            {expandedCard === index ? (
              <>
                <div className="flex flex-col items-center justify-center w-full lg:w-1/4">
                  <h2 className="clamp-animation-text text-center  font-bold z-30 text-white animate__animated animate__fadeIn">
                    <AnimatedNumber number={problem.number} />%
                  </h2>
                </div>

                <div className="flex flex-col items-center justify-center w-full md:pl-5 lg:w-3/4">
                  <AnimatedText isVisible={expandedCard === index}>
                    <h2 className="text-xl lg:text-3xl font-bold mb-2 text-white z-10">{problem.title}</h2>
                    <p className="clamp-description z-30 text-white lg:text-xl custom-white-text">
                      {problem.description}
                    </p>
                  </AnimatedText>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center h-full text-center w-full">
                <h2 className="relative text-xl lg:text-3xl font-bold mb-2 text-white z-30">{problem.title}</h2>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Problems;
