import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Plus } from 'lucide-react';

export const SessionNotes: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Session Notes</h3>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg text-primary-light hover:text-white transition-all"
        >
          <Plus className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="space-y-3">
        {[1, 2, 3].map((note) => (
          <motion.div
            key={note}
            whileHover={{ x: 4 }}
            className="p-3 bg-black/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer group"
          >
            <div className="flex items-start space-x-3">
              <FileText className="w-4 h-4 text-primary-light mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-white/90 font-medium mb-1">Follow-up Required</h4>
                <p className="text-white/60 text-sm">Client requested additional information about premium packages.</p>
                <div className="flex items-center space-x-2 mt-2 text-xs text-white/40">
                  <span>Added by Emma</span>
                  <span>•</span>
                  <span>2 hours ago</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};