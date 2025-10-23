import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 w-xs md:w-sm mx-auto hover:shadow-xl transition-all duration-300">
      <div className="relative group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto object-cover"
          
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Optional badge for category */}
        {item.category && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            {item.category}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">
            Rs. {item.price}
          </span>
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg active:scale-95 transition-all duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
