import React from "react";
import portfolio from "../Assets/portfolio.jpg";
import bgChanger from "../Assets/bgchanger.jpg";
import calculator from "../Assets/calculator.jpg";
import { motion as m } from "framer-motion";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
    },
    {
      id: 2,
      src: bgChanger,
    },
    {
      id: 3,
      src: calculator,
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <m.div whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} initial={{ x: -50, opacity: 0 }} transition={{ duration: 1 }} className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out Some of My Work.</p>
        </m.div>
        <m.div transition={{ staggerChildren: 0.5 }} className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {portfolios.map(({ id, src }) => (
            <m.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ delay: 0.1, duration: 0.3 }} key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </div>
  );
};

export default Portfolio;
