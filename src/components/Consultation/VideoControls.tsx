import React from 'react';
import { motion } from 'framer-motion';
import { Video, VideoOff, Mic, MicOff, Monitor, PhoneOff } from 'lucide-react';

interface VideoControlsProps {
  isVideoOn: boolean;
  setIsVideoOn: (value: boolean) => void;
  isMuted: boolean;
  setIsMuted: (value: boolean) => void;
  isScreenSharing: boolean;
  setIsScreenSharing: (value: boolean) => void;
}

export const VideoControls: React.FC<VideoControlsProps> = ({
  isVideoOn,
  setIsVideoOn,
  isMuted,
  setIsMuted,
  isScreenSharing,
  setIsScreenSharing
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
      <div className="flex items-center justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVideoOn(!isVideoOn)}
          className={`p-4 rounded-full backdrop-blur-sm transition-all
            ${isVideoOn ? 'bg-white/10 hover:bg-white/20' : 'bg-rose-500/80 hover:bg-rose-500'}`}
        >
          {isVideoOn ? (
            <Video className="w-6 h-6 text-white" />
          ) : (
            <VideoOff className="w-6 h-6 text-white" />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMuted(!isMuted)}
          className={`p-4 rounded-full backdrop-blur-sm transition-all
            ${!isMuted ? 'bg-white/10 hover:bg-white/20' : 'bg-rose-500/80 hover:bg-rose-500'}`}
        >
          {!isMuted ? (
            <Mic className="w-6 h-6 text-white" />
          ) : (
            <MicOff className="w-6 h-6 text-white" />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsScreenSharing(!isScreenSharing)}
          className={`p-4 rounded-full backdrop-blur-sm transition-all
            ${isScreenSharing ? 'bg-emerald-500/80 hover:bg-emerald-500' : 'bg-white/10 hover:bg-white/20'}`}
        >
          <Monitor className="w-6 h-6 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-rose-500 rounded-full hover:bg-rose-600 transition-all"
        >
          <PhoneOff className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </div>
  );
};