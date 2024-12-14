import React from 'react';
import { Activity } from 'lucide-react';

// Custom waveform icon using Activity from lucide-react since Wave is not available
export const WaveformIcon: React.FC<{ className?: string }> = ({ className }) => {
  return <Activity className={className} />;
};