import React, { useState, useEffect } from 'react';
import MenuCard from './MenuCard';
import CategoryTabs from './CategoryTabs';
import { menuData } from '../data/menuData';

const MenuGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState([]);

  const categories = ['All', ...menuData.map(cat => cat.category)];

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(menuData.flatMap(cat => cat.items));
    } else {
      const category = menuData.find(cat => cat.category === activeCategory);
      setFilteredItems(category ? category.items : []);
    }
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div id='menu' className="container mx-auto px-4 py-8 pt-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">Our <span className='text-primary'>Menu</span></h2>
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
