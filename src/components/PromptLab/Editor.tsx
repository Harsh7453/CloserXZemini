import React, { useState } from 'react';
import { ArrowRight, BookTemplate } from 'lucide-react';
import { motion } from 'framer-motion';
import { templates } from './templates';
import { TemplateModal } from './TemplateModal';

interface EditorProps {
  onNext: () => void;
}

export const Editor: React.FC<EditorProps> = ({ onNext }) => {
  const [prompt, setPrompt] = useState('');
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const handleTemplateSelect = (templatePrompt: string) => {
    setPrompt(templatePrompt);
    setIsTemplateModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <BookTemplate className="w-5 h-5 text-primary-light" />
            <h3 className="text-lg font-semibold text-white">Prompt Editor</h3>
          </div>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsTemplateModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 
                       rounded-lg transition-all"
            >
              <BookTemplate className="w-4 h-4 text-accent-light" />
              <span className="text-white">Templates</span>
            </motion.button>
            <motion.button 
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 
                       rounded-lg transition-all group"
            >
              <span className="text-white">Next</span>
              <ArrowRight className="w-4 h-4 text-primary-light group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
        
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-[300px] bg-black/20 backdrop-blur-lg rounded-xl p-4 text-white/90 
                     focus:ring-2 focus:ring-primary/50 focus:outline-none
                     placeholder-white/30 resize-none"
            placeholder="Enter your prompt here or select a template..."
          />
          
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <div className="px-3 py-1 bg-primary/20 rounded-full text-xs text-white/70">
              Tokens: {prompt.length}
            </div>
          </div>
        </div>
      </div>

      <TemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        onSelect={handleTemplateSelect}
        templates={templates}
      />
    </div>
  );
};