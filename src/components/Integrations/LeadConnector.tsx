import React from 'react';
import { motion } from 'framer-motion';
import { Link2 } from 'lucide-react';

export const LeadConnector: React.FC = () => {
  const handleConnect = () => {
    window.open('https://app.leadconnector.com/auth', '_blank');
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
          <Link2 className="w-5 h-5 text-primary-light" />
        </div>
        <h2 className="text-xl font-semibold text-white">LeadConnector Integration</h2>
      </div>

      <div className="text-center py-8">
        <p className="text-white/70 mb-6">
          Connect your LeadConnector account to automatically sync contacts and conversations.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConnect}
          className="px-6 py-3 bg-gradient-to-r from-primary/80 to-accent/80 rounded-xl
                   text-white font-medium flex items-center justify-center space-x-2
                   hover:from-primary hover:to-accent transition-all duration-300
                   shadow-lg shadow-primary/25 mx-auto"
        >
          <Link2 className="w-5 h-5" />
          <span>Connect with LeadConnector</span>
        </motion.button>
      </div>
    </div>
  );
};