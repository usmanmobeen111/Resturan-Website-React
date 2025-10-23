import React from 'react';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform
            ${
              activeCategory === category
                ? 'bg-primary text-light scale-105 shadow-md'
                : 'bg-light border border-primary  text-primary hover:bg-primary cursor-pointer hover:text-light'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
