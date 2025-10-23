import React from "react";

const Hero = () => {
  return (
    <section className="pt-20 bg-light min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 overflow-hidden">
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight">
          A Culinary Experience <br />
          <span className="text-primary">Crafted to Perfection.</span>
        </h1>
        <p className="text-lg md:text-xl text-dark/80 max-w-lg mx-auto md:mx-0">
          Delight your senses with gourmet dishes prepared by our master chefs — 
          where every flavor tells a story and every bite feels like home.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-primary text-light px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300">
            View Menu
          </button>
          <button className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-light transition-all duration-300">
            Book a Table
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative w-64 md:w-lg  bg-secondary rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="/hero.png"
            alt="Delicious Dish"
            className=" object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
