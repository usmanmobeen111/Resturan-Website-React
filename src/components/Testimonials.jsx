import React from "react";
import { testimonialsData } from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="bg-light py-20 font-lato">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
          What Our <span className="text-primary">Customers</span> Say
        </h2>
        <p className="text-center text-dark/70 max-w-2xl mx-auto mb-12">
          Our guests’ satisfaction is the heart of everything we do. Here’s what they
          have to say about their experience with us.
        </p>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
