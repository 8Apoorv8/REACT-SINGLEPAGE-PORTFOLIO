import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          {/* FORM.io is being used to recieve the form data */}
          <form
            action="https://getform.io/f/7c841d34-782a-4e51-a95c-9c965f17b40b"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              className="p-2 bg-transparent rounded-md text-white border-2 focus:outline-none"
              placeholder="write something for me.."
              rows="10"
            ></textarea>
            <motion.button whileInView={{ y: 0, opacity: 1, type: "spring" }} initial={{ y: -60, opacity: 0 }} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
