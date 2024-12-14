import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TabNavigation } from '../components/Layout/TabNavigation';
import { Editor } from '../components/PromptLab/Editor';
import { VoiceConfig } from '../components/Settings/VoiceConfig';
import { CodePreview } from '../components/Embed/CodePreview';
import { ParticleBackground } from '../components/Particles/ParticleBackground';

export const AgentConfig: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('prompt');

  const handleNext = () => {
    if (activeTab === 'prompt') {
      setActiveTab('settings');
    } else if (activeTab === 'settings') {
      setActiveTab('embed');
    }
  };

  return (
    <div className="relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 relative inline-block">
            <span className="relative z-10">Configure Agent</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
          </h1>
          <p className="text-white/70">Agent ID: {id}</p>
        </header>

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="max-w-6xl mx-auto">
          {activeTab === 'prompt' && <Editor onNext={handleNext} />}
          {activeTab === 'settings' && <VoiceConfig />}
          {activeTab === 'embed' && <CodePreview />}
        </main>
      </div>
    </div>
  );
};