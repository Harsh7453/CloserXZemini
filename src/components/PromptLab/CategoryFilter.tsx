import React from 'react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-lg text-sm transition-all
            ${selectedCategory === category
              ? 'bg-primary/30 text-white'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};