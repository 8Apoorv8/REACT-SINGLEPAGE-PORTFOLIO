import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const Links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  let [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Apoorv</h1>
      </div>
      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
          >
            <Link to={link} smooth={true} duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          nav
            ? `flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 transition-all ease-in duration-500`
            : `fixed left-[-400px]`
        }
      >
        {Links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to={link} smooth={true} duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
