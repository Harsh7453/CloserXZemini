import React, { useState } from 'react';
import { Volume2, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { VoiceSlider } from './VoiceSlider';
import { voices } from './voices';

export const VoiceConfig: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = useState(voices[0].id);
  const [speed, setSpeed] = useState(50);
  const [pitch, setPitch] = useState(50);

  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Volume2 className="w-6 h-6 text-primary-light" />
            <h3 className="text-xl font-semibold text-white">Voice Settings</h3>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-accent/20 rounded-lg hover:bg-accent/30 transition-all"
          >
            <Mic className="w-4 h-4 text-accent-light" />
            <span className="text-white">Test Voice</span>
          </motion.button>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-white/80 text-sm">Select Voice</label>
            <div className="grid grid-cols-2 gap-3">
              {voices.map((voice) => (
                <motion.button
                  key={voice.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedVoice(voice.id)}
                  className={`p-4 rounded-xl transition-all ${
                    selectedVoice === voice.id
                      ? 'bg-primary/20 border-primary/50 text-white'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  } border`}
                >
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-medium mb-1">{voice.name}</span>
                    <span className="text-sm opacity-70">{voice.description}</span>
                    <div className="flex items-center mt-2 text-xs space-x-2">
                      <span className="px-2 py-0.5 bg-white/10 rounded-full">{voice.gender}</span>
                      <span className="px-2 py-0.5 bg-white/10 rounded-full">{voice.age}</span>
                      <span className="px-2 py-0.5 bg-white/10 rounded-full">{voice.accent}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <VoiceSlider
              label="Speed"
              value={speed}
              onChange={setSpeed}
            />
            <VoiceSlider
              label="Pitch"
              value={pitch}
              onChange={setPitch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};