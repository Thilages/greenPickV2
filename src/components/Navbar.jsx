  import React from "react";
  import Logo from "../assets/Logo(FN).svg";
  import { IoMdTime } from "react-icons/io";
  import MobileNavbar from "./MobileNavbar";
  import DesktopNavbar from "./DesktopNavbar";

  const Navbar = () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    return (
      <div className="navbar-glass-effect fixed top-1 left-0 h-[70px] w-full border-2  shadow-lg z-30">
        <div className="flex justify-between h-full px-10 items-center">
          {/* logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-10" />
          </div>
          {/* main */}
          <div className="w-full">
            <div className="sm:hidden">
              <MobileNavbar />
            </div>
            <div className="max-sm:hidden ">
              <DesktopNavbar />
            </div>
          </div>
          {/* right */}
          <div className="max-sm:hidden flex  items-center">
            <IoMdTime className="text-xprimary" />
            <div className="ml-1 text-xprimary text-sm font-poppins">{currentTime}(IST)</div>
          </div>
        </div>
      </div>
    );
  };

  export default Navbar;
