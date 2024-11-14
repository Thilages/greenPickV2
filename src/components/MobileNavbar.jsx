import React, { useState } from "react";
import { Link } from 'react-scroll'; // Import Link from react-scroll

const MobileNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);
  };

  const navbarHeight = 70; // Set this to the height of your navbar in pixels

  return (
    <div className="flex w-full justify-end">
      <div className="relative font-montserrat">
        <button
          className="text-md bg-xprimary text-white rounded-3xl px-3 py-1"
          onClick={toggleDropdown}
        >
          Menu
        </button>
        {isDropdownOpen && (
          <div className="absolute top-10 -left-16 w-40 text-center bg-white shadow-lg rounded-lg z-10">
            <ul className="flex flex-col p-2">
              <li
                className="py-2 px-4 rounded-xl hover:bg-gray-200 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight} // Adjust scroll position by navbar height
                  className="w-full h-full flex items-center justify-center"
                  onClick={handleMenuItemClick} // Close dropdown on click
                >
                  Home
                </Link>
              </li>
              <li
                className="py-2 px-4 rounded-xl hover:bg-gray-200 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                <Link
                  to="mission"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight} // Adjust scroll position by navbar height
                  className="w-full h-full flex items-center justify-center"
                  onClick={handleMenuItemClick} // Close dropdown on click
                >
                  Mission
                </Link>
              </li>
              <li
                className="py-2 px-4 rounded-xl hover:bg-gray-200 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                <Link
                  to="products"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight} // Adjust scroll position by navbar height
                  className="w-full h-full flex items-center justify-center"
                  onClick={handleMenuItemClick} // Close dropdown on click
                >
                  Products
                </Link>
              </li>
              <li
                className="py-2 px-4 rounded-xl hover:bg-gray-200 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight} // Adjust scroll position by navbar height
                  className="w-full h-full flex items-center justify-center"
                  onClick={handleMenuItemClick} // Close dropdown on click
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
