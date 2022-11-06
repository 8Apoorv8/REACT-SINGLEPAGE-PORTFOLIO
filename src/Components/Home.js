import React from "react";
import MyImg from "../Assets/apoorv.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      name="Home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End / React Developer.{" "}
          </h2>

          <p className="py-4 text-gray-500 max-w-md">
            I have around 2 years of self learned experience of building and
            designing Front-end. Currently, I love to work on Web applications
            with some recent technologies like React, Tailwind ,Next JS.
          </p>
          <div>
            <Link to={"Portfolio"} smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={MyImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full lg:ml-8  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
