import React from 'react';
import { motion } from 'framer-motion';
import { TemplateCard } from './TemplateCard';
import type { Template } from './templates';

interface TemplateGridProps {
  templates: Template[];
  onSelect: (template: Template) => void;
  selectedCategory: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const TemplateGrid: React.FC<TemplateGridProps> = ({
  templates,
  onSelect,
  selectedCategory,
}) => {
  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {filteredTemplates.map((template) => (
        <motion.div key={template.id} variants={item}>
          <TemplateCard
            template={template}
            onSelect={() => onSelect(template)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};