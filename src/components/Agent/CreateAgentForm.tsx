import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, Users, Headphones, MessageSquare, Clock, BarChart, Zap } from 'lucide-react';
import type { AgentType } from './types';

interface CreateAgentFormProps {
  agentName: string;
  setAgentName: (name: string) => void;
  selectedType: string | null;
  setSelectedType: (type: string) => void;
  agentTypes: AgentType[];
  onCancel: () => void;
  onSubmit: () => void;
}

export const CreateAgentForm: React.FC<CreateAgentFormProps> = ({
  agentName,
  setAgentName,
  selectedType,
  setSelectedType,
  agentTypes,
  onCancel,
  onSubmit
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-8"
    >
      <div className="space-y-8">
        <div>
          <label className="text-white/90 text-sm block mb-2">Agent Name</label>
          <div className="relative">
            <Bot className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              placeholder="Enter agent name"
              className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3
                       text-white placeholder-white/40 focus:outline-none focus:ring-2
                       focus:ring-primary/50"
            />
          </div>
        </div>

        <div>
          <label className="text-white/90 text-sm block mb-4">Select Agent Type</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sales Agent Card */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedType('sales')}
              className={`relative overflow-hidden p-6 rounded-xl border transition-all duration-300 ${
                selectedType === 'sales'
                  ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/50'
                  : 'bg-black/20 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 
                           blur-2xl rounded-full -mr-16 -mt-16" />
              <div className="relative">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg">
                    <Users className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-lg mb-2">Sales Agent</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Expert in lead conversion and relationship building
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center space-x-2 text-white/70">
                        <MessageSquare className="w-4 h-4 text-amber-400" />
                        <span className="text-sm">Smart Responses</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/70">
                        <BarChart className="w-4 h-4 text-amber-400" />
                        <span className="text-sm">Sales Analytics</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/70">
                        <Clock className="w-4 h-4 text-amber-400" />
                        <span className="text-sm">24/7 Availability</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/70">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span className="text-sm">Quick Quotes</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-amber-400/80 text-sm">
                      <span className="px-2 py-1 bg-amber-500/10 rounded-full">Lead Generation</span>
                      <span className="px-2 py-1 bg-amber-500/10 rounded-full">Conversion</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>

            {/* Support Agent Card */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedType('support')}
              className={`relative overflow-hidden p-6 rounded-xl border transition-all duration-300 ${
                selectedType === 'support'
                  ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/50'
                  : 'bg-black/20 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 
                           blur-2xl rounded-full -mr-16 -mt-16" />
              <div className="relative">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <Headphones className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-lg mb-2">Support Agent</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Dedicated to customer success and problem resolution
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center space-x-2 text-white/70">
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm">Ticket Handling</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/70">
                        <BarChart className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm">Issue Tracking</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/70">
                        <Clock className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm">Fast Response</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/70">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm">Smart Solutions</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-emerald-400/80 text-sm">
                      <span className="px-2 py-1 bg-emerald-500/10 rounded-full">Technical</span>
                      <span className="px-2 py-1 bg-emerald-500/10 rounded-full">Customer Care</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          </div>
        </div>

        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCancel}
            className="flex-1 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-xl
                     text-white font-medium transition-all"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSubmit}
            disabled={!agentName || !selectedType}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-primary/80 to-accent/80 rounded-xl
                     text-white font-medium flex items-center justify-center space-x-2
                     hover:from-primary hover:to-accent transition-all duration-300
                     shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Create Agent</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};