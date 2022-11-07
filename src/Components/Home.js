import React from "react";
import MyImg from "../Assets/apoorv.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-scroll'
import { motion as m } from 'framer-motion'
const Home = () => {


  return (
    <div
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      name="Home"
    >
      <m.div transition={{ staggerChildren: 0.5 }} className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <m.h2 whileInView={{ x: 0, opacity: 1 }} initial={{ x: 40, opacity: 0.2 }} transition={{ duration: 0.4 }}
            className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Front-End / React Developer.{" "}
          </m.h2>

          <m.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}
            className="py-4 text-gray-500 max-w-md">
            I have around 2 years of self learned experience of building and
            designing Front-end. Currently, I love to work on Web applications
            with some recent technologies like React, Tailwind ,Next JS.
          </m.p>
          <m.div className="" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 1 }}>
            <Link to={"Portfolio"} smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineRight size={20} className="ml-1" />
              </span>
            </Link>
          </m.div>
        </div>
        <div>
          <m.img whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.4 }} initial={{ x: -100 }}
            src={MyImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full lg:ml-8 opacity-0 "
          />
        </div>
      </m.div >
    </div >
  );
};

export default Home;
