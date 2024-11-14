import React from "react";
import Logo from "../assets/Logo(FN).svg";
import { IoMdTime } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const now = new Date();
  const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/shop');
  };

  return (
    <div className="navbar-glass-effect fixed top-1 left-0 h-[70px] w-full border-2 shadow-lg z-30">
      <div className="flex justify-between h-full px-10 items-center">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        {/* Navbar */}
        <div className="w-full">
          <div className="sm:hidden">
            <MobileNavbar />
          </div>
          <div className="max-sm:hidden">
            <DesktopNavbar />
          </div>
        </div>

        {/* Right Section */}
        <div className="max-sm:hidden flex items-center space-x-6">
          <div className="flex items-center">
            <IoMdTime className="text-xprimary" />
            <div className="ml-1 text-xprimary text-sm font-poppins">{currentTime}(IST)</div>
          </div>
          
          {/* Shop Button */}
          <button 
            onClick={handleShopClick} 
            className="bg-xprimary text-white py-1 px-4 rounded-lg font-poppins hover:bg-opacity-90 transition duration-200"
          >
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
