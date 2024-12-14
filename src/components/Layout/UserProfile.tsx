import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UserProfile: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <Link
        to="/profile"
        className="flex items-center space-x-3 px-4 py-2 rounded-xl hover:bg-white/5 transition-all"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 
                       flex items-center justify-center border border-white/10">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-900" />
        </div>
        <div className="hidden md:block">
          <p className="text-white font-medium">John Doe</p>
          <p className="text-white/60 text-sm">Administrator</p>
        </div>
      </Link>
    </motion.div>
  );
};