import React from "react";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} initial={{ x: -50, opacity: 0 }} transition={{ duration: 1 }} className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>
        <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0.2 }} transition={{ duration: 0.2 }} viewport={{ once: false, amount: 0.2 }} className="text-xl mt-20">
          I started learning coding in my highcholling days. I always had keen
          intrest in technologies.Jumping to my college years i was very
          facinated by how big MNC's made their websites even sometimes
          government site too. That got me to think how developer buid this.
        </motion.p>
        <br />
        <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0.2 }} transition={{ duration: 0.2 }} viewport={{ once: false, amount: 0.2 }} className="text-xl ">
          Prior to it i was just doing normal basic acdemic coding. but after
          these kinds of thoughts my perspective of thinking how site works
          changed. Then i started to learn JS, Html, and Css to get the basic
          understanding of how website work. So yah this got me intrested in web
          development and here i am.
        </motion.p>
      </div>
    </div >
  );
};

export default About;
