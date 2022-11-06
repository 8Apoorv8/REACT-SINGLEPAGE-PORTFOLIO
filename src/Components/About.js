import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I started learning coding in my highcholling days. I always had keen
          intrest in technologies.Jumping to my college years i was very
          facinated by how big MNC's made their websites even sometimes
          government site too. That got me to think how developer buid this.
        </p>
        <br />
        <p className="text-xl ">
          Prior to it i was just doing normal basic acdemic coding. but after
          these kinds of thoughts my perspective of thinking how site works
          changed. Then i started to learn JS, Html, and Css to get the basic
          understanding of how website work. So yah this got me intrested in web
          development and here i am.
        </p>
      </div>
    </div>
  );
};

export default About;
