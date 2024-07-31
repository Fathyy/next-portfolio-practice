"use client"
import { navLinks } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
// import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  //   const location = useLocation()
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  //   useEffect(() => {
  //     const currentPath = location.pathname;
  //     const currentPage = currentPath.split("/")[1];
  //     setActive(currentPage || "Home");
  //   }, [location]);

  return (
    <section ref={navRef}>
      <nav className="w-full py-4 flex items-center justify-between">
        <div className="">
          {/* <img src={logo} alt="" className="w-[100px]" /> */}
          <a href="/">
            <p className="font-bold text-2xl md:text-3xl text-lightWhite">
              <span className="text-accentRed">F</span>
              athi
            </p>
          </a>
        </div>

        <ul className="hidden xl:flex justify-end lg:justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`
          font-semibold
          cursor-pointer
          text-base
          ${active === nav.id ? "text-black" : "text-lightWhite"}
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          `}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.id}`}
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-accentRed after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {nav.title}
              </a>{" "}
            </li>
          ))}
        </ul>

        <button className="hidden xl:flex bg-accentRed px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 text-[15px] font-semibold border-none outline-none  hover:bg-lightBlue transform hover:scale-110 transition-all duration-200">
          DOWNLOAD CV
        </button>

        <div className="xl:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <IoClose
                style={{ width: "50px", height: "50px", color: "white" }}
              />
            ) : (
              <IoMdMenu
                style={{ width: "50px", height: "50px", color: "white" }}
              />
            )}
          </button>

          <div
            className={`${toggle ? "flex" : "hidden"}
        flex-col p-6 bg-accentRed absolute top-20 right-0
        mx-4 my-2 min-w-[140px] rounded-xl sidebar z-30`}
          >
            <ul className="list-none flex flex-col justify-end items-start flex-1 gap-6 ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
          font-semibold
          cursor-pointer
          text-base
          ${active === nav.id ? "text-[#FFCF59]" : "text-white"}
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          `}
                  onClick={() => setActive(nav.title)}
                >
                  <a
                    href={`#${nav.id}`}
                    className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-accentRed after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <button className="bg-lightWhite px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg lg:text-lg xl:text-x font-semibold border-none outline-none hover:bg-lightBlue transform hover:scale-110 transition-all duration-200">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
