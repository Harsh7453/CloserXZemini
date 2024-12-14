import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Zap } from 'lucide-react';
import type { Template } from './templates';

interface TemplateCardProps {
  template: Template;
  onSelect: () => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template, onSelect }) => {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.02, y: -2 }}
      className="text-left p-4 bg-black/20 rounded-xl border border-white/10 
                 hover:border-primary/30 transition-all duration-300 w-full"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="text-white font-medium mb-1">{template.title}</h4>
          <span className="px-2 py-0.5 bg-primary/20 rounded-full text-xs text-primary-light">
            {template.category}
          </span>
        </div>
        {template.featured && (
          <span className="px-2 py-0.5 bg-accent/20 rounded-full text-xs text-accent-light">
            Featured
          </span>
        )}
      </div>
      
      <p className="text-sm text-white/70 mb-3 line-clamp-2">{template.description}</p>
      
      <div className="flex items-center justify-between text-xs text-white/60">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            <span>{template.successRate}%</span>
          </div>
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            <span>{template.usageCount}</span>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < template.rating ? 'text-yellow-400 fill-current' : 'text-white/20'}`}
            />
          ))}
        </div>
      </div>
    </motion.button>
  );
};