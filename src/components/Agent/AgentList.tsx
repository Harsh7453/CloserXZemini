import React from 'react';
import { motion } from 'framer-motion';
import { Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Agent, AgentType } from './types';

interface AgentListProps {
  agents: Agent[];
  getAgentTypeInfo: (typeId: string) => AgentType | undefined;
}

export const AgentList: React.FC<AgentListProps> = ({ agents, getAgentTypeInfo }) => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-4">
      {agents.map((agent) => {
        const typeInfo = getAgentTypeInfo(agent.type);
        return (
          <motion.div
            key={agent.id}
            whileHover={{ scale: 1.01 }}
            className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10
                     hover:border-primary/30 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${typeInfo?.iconColor}`}>
                  {typeInfo?.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{agent.name}</h3>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="text-white/60">{typeInfo?.name}</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                    <span className="text-white/60">Created {agent.createdAt}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs
                  ${agent.status === 'active' 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-amber-500/20 text-amber-400'
                  }`}
                >
                  {agent.status}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigate(`/agent/${agent.id}`)}
                  className="p-2 hover:bg-white/5 rounded-lg opacity-0 group-hover:opacity-100
                           transition-all"
                >
                  <Edit2 className="w-4 h-4 text-white/40 hover:text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};