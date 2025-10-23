import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-10 bg-light min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 overflow-hidden font-lato"
    >
      {/* Left Side - Text */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-dark leading-tight"
        >
          A Culinary Experience <br />
          <span className="text-primary">Crafted to Perfection.</span>
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-dark/80 max-w-lg mx-auto md:mx-0"
        >
          Delight your senses with gourmet dishes prepared by our master chefs —
          where every flavor tells a story and every bite feels like home.
        </motion.p>

        <div className="flex gap-4 justify-center md:justify-start pt-2">
          <motion.button
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="bg-primary text-light px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Menu
          </motion.button>

          <motion.button
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-light transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book a Table
          </motion.button>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
        initial={{ x: 100, opacity: 0, scale: 0.9 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] bg-secondary rounded-full flex items-center justify-center overflow-hidden shadow-xl">
          <motion.img
            src="/hero.png"
            alt="Delicious Dish"
            className="object-contain drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
