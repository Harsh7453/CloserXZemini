import React from 'react';
import { WaveformIcon } from './icons';
import type { VoiceStyleButtonProps } from './types';
import { motion } from 'framer-motion';

export const VoiceStyleButton: React.FC<VoiceStyleButtonProps> = ({ style }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all
                 border border-white/10 hover:border-primary/50 group"
    >
      <WaveformIcon className="w-5 h-5 text-primary-light mb-2 group-hover:scale-110 transition-transform" />
      <span className="text-white/90 text-sm">{style}</span>
    </motion.button>
  );
};