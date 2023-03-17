import React, { useCallback, useState, useEffect } from "react";
import NavBarItems from "./NavBarItems";
import { BsChevronDown, BsChevronUp, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [setShowbackGround, setSetShowbackGround] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setSetShowbackGround(true);
      } else {
        setSetShowbackGround(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobielMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toogleAccoutnMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          setShowbackGround ? "bg-zinc-900 bg-opacity-90" : ""
        } `}
      >
        <img className="h-20 lg:h-25" src="/images/logo2.png" alt="logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavBarItems label="Home" />
          <NavBarItems label="Series" />
          <NavBarItems label="Films" />
          <NavBarItems label="New & popular" />
          <NavBarItems label="My List" />
          <NavBarItems label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobielMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>{" "}
          {!showMobileMenu ? (
            <BsChevronDown className={`text-white transition`} />
          ) : (
            <BsChevronUp className={`text-white transition`} />
          )}
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toogleAccoutnMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/bluedef.png" alt="avatar" />
            </div>
            {!showAccountMenu ? (
              <BsChevronDown className={`text-white transition`} />
            ) : (
              <BsChevronUp className={`text-white transition`} />
            )}
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
