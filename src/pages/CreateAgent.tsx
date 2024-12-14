import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Plus } from 'lucide-react';
import { ParticleBackground } from '../components/Particles/ParticleBackground';
import { AgentList } from '../components/Agent/AgentList';
import { CreateAgentForm } from '../components/Agent/CreateAgentForm';
import type { Agent, AgentType } from '../components/Agent/types';

// Sample existing agents
const existingAgents: Agent[] = [
  {
    id: '1',
    name: 'Emma',
    type: 'sales',
    createdAt: '2024-03-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'James',
    type: 'support',
    createdAt: '2024-03-14',
    status: 'active'
  }
];

const agentTypes: AgentType[] = [
  {
    id: 'sales',
    name: 'Sales Agent',
    description: 'Specialized in converting leads and closing deals',
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    iconColor: 'bg-amber-400/20 text-amber-400',
    features: ['Lead qualification', 'Product recommendations', 'Objection handling']
  },
  {
    id: 'support',
    name: 'Support Agent',
    description: 'Expert in customer service and technical support',
    icon: <Wand2 className="w-6 h-6 text-emerald-400" />,
    iconColor: 'bg-emerald-400/20 text-emerald-400',
    features: ['Ticket resolution', 'Technical guidance', 'Customer satisfaction']
  }
];

export const CreateAgent: React.FC = () => {
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(true);
  const [agentName, setAgentName] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleCreateAgent = () => {
    if (!agentName || !selectedType) return;
    const agentId = Date.now().toString();
    navigate(`/agent/${agentId}`);
  };

  const getAgentTypeInfo = (typeId: string) => {
    return agentTypes.find(type => type.id === typeId);
  };

  return (
    <div className="relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 relative inline-block">
            <span className="relative z-10">AI Agents</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
          </h1>
          <p className="text-white/70">Manage and create your AI assistants</p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Create Form */}
          {showCreateForm ? (
            <CreateAgentForm
              agentName={agentName}
              setAgentName={setAgentName}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              agentTypes={agentTypes}
              onCancel={() => setShowCreateForm(false)}
              onSubmit={handleCreateAgent}
            />
          ) : (
            <div className="mb-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCreateForm(true)}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-xl text-white
                         flex items-center space-x-2 transition-all mx-auto"
              >
                <Plus className="w-4 h-4" />
                <span>New Agent</span>
              </motion.button>
            </div>
          )}

          {/* Existing Agents */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Your Agents</h2>
            <AgentList
              agents={existingAgents}
              getAgentTypeInfo={getAgentTypeInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};