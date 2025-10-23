import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { image, name, role, rating, feedback } = testimonial;

  return (
    <div className="relative bg-white text-dark p-6 pt-16 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Profile Image */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-primary object-cover shadow-md"
        />
      </div>

      {/* Stars */}
      <div className="flex justify-center mt-6 mb-3 text-secondary">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="text-secondary" />
        ))}
      </div>

      {/* Feedback */}
      <p className="text-center text-sm italic text-dark/80 mb-5 leading-relaxed">
        “{feedback}”
      </p>

      {/* Name and Role */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-primary">{name}</h3>
        <p className="text-sm text-dark/60 font-medium">{role}</p>
      </div>

      {/* Accent border line at bottom */}
      <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default TestimonialCard;
