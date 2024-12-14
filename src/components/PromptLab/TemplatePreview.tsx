import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Users, Zap } from 'lucide-react';
import type { Template } from './templates';

interface TemplatePreviewProps {
  template: Template;
  onBack: () => void;
  onSelect: () => void;
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  template,
  onBack,
  onSelect,
}) => {
  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to templates</span>
      </button>

      <div className="bg-black/20 rounded-xl p-6 border border-white/10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{template.title}</h3>
            <div className="flex items-center space-x-3 text-sm">
              <span className="px-3 py-1 bg-primary/20 rounded-full text-primary-light">
                {template.category}
              </span>
              {template.featured && (
                <span className="px-3 py-1 bg-accent/20 rounded-full text-accent-light">
                  Featured
                </span>
              )}
            </div>
          </div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < template.rating ? 'text-yellow-400 fill-current' : 'text-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-white/70 mb-6">{template.description}</p>

        <div className="flex items-center space-x-6 mb-6 text-sm text-white/60">
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            <span>{template.successRate}% Success Rate</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            <span>{template.usageCount} Uses</span>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-4 mb-6">
          <h4 className="text-sm font-medium text-white/80 mb-2">Template Prompt:</h4>
          <pre className="text-white/90 whitespace-pre-wrap font-mono text-sm">
            {template.prompt}
          </pre>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSelect}
          className="w-full py-3 bg-primary/20 hover:bg-primary/30 rounded-xl text-white 
                   font-medium transition-all"
        >
          Use This Template
        </motion.button>
      </div>
    </div>
  );
};