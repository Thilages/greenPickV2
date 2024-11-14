import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const DesktopNavbar = () => {
  const navbarHeight = 70; // Set this to the height of your navbar in pixels

  return (
    <div className='flex gap-2 px-1 py-[5px] rounded-3xl font-montserrat text-[#284121] items-center justify-center'>
      <Link
        to="home" // Target ID of the home section
        smooth={true}
        duration={500}
        offset={-navbarHeight} // Adjust scroll position by navbar height
        className='middle-hover px-2 cursor-pointer'
      >
        Home
      </Link>
      <Link
        to="mission" // Target ID of the mission section
        smooth={true}
        duration={500}
        offset={-navbarHeight} // Adjust scroll position by navbar height
        className='middle-hover px-2 cursor-pointer'
      >
        Mission
      </Link>
      <Link
        to="products" // Target ID of the products section
        smooth={true}
        duration={500}
        offset={-navbarHeight} // Adjust scroll position by navbar height
        className='middle-hover px-2 cursor-pointer'
      >
        Products
      </Link>
      <Link
        to="contact" // Target ID of the contact section
        smooth={true}
        duration={500}
        offset={-navbarHeight} // Adjust scroll position by navbar height
        className='hover:bg-xprimary hover:text-white px-4 border-2 border-xsecondary p-1 rounded-2xl cursor-pointer'
      >
        Contact Us
      </Link>
    </div>
  );
};

export default DesktopNavbar;
