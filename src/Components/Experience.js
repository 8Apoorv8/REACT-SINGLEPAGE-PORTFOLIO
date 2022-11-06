import React from "react";
import css from "../Assets/expirience/css.webp";
import html from "../Assets/expirience/html1.webp";
import js from "../Assets/expirience/js.png";
import react from "../Assets/expirience/react.png";
import tailwind from "../Assets/expirience/tailwind.png";
const Experience = () => {
  const img = [
    {
      id: 1,
      src: html,
      title: "HTML",
      shadow: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      shadow: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JS",
      shadow: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      shadow: "shadow-pink-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      shadow: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="Experience "
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i have worked on.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {img.map(({ id, src, title, style, shadow }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${shadow}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
