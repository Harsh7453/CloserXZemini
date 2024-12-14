import React from 'react';
import type { VoiceSliderProps } from './types';
import { motion } from 'framer-motion';

export const VoiceSlider: React.FC<VoiceSliderProps> = ({ label, value, onChange }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-white/80 text-sm">{label}</label>
        <span className="text-white/60 text-sm">{value}%</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:bg-primary
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-webkit-slider-thumb]:transition-all
                   [&::-webkit-slider-thumb]:hover:scale-110"
        />
        <motion.div
          className="absolute left-0 top-1/2 h-2 bg-primary/30 rounded-l-lg -translate-y-1/2"
          style={{ width: `${value}%` }}
          initial={false}
          animate={{ width: `${value}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
};