import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

const tags = [
  { name: 'Appointment Booked', count: 28, color: 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' },
  { name: 'Follow-up Required', count: 15, color: 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30' },
  { name: 'Payment Pending', count: 8, color: 'bg-rose-500/20 text-rose-400 hover:bg-rose-500/30' },
  { name: 'Information Requested', count: 12, color: 'bg-sky-500/20 text-sky-400 hover:bg-sky-500/30' }
];

export const SessionTags: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">Session Tags</h3>
      
      <div className="space-y-2">
        {tags.map((tag) => (
          <motion.div
            key={tag.name}
            whileHover={{ scale: 1.02, x: 4 }}
            className={`p-3 rounded-xl ${tag.color} cursor-pointer transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>{tag.name}</span>
              </div>
              <span className="px-2 py-0.5 bg-black/20 rounded-full text-xs backdrop-blur-sm">
                {tag.count}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};