import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { GrResume } from "react-icons/gr";
const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiOutlineLinkedin size={30} />
        </>
      ),
      href: "https://LinkedIn.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Git Hub <FiGithub size={30} />
        </>
      ),
      href: "https://github.com",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <AiOutlineInstagram size={30} />
        </>
      ),
      href: "https://instgram.com",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <AiOutlineFacebook size={30} />
        </>
      ),
      href: "https://facebook.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume <GrResume size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed hidden  ">
      <ul className=" ">
        {Links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-600 " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full  text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
