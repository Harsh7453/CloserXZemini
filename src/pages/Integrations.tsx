import React from 'react';
import { LeadConnector } from '../components/Integrations/LeadConnector';
import { WebhookConfig } from '../components/Integrations/WebhookConfig';
import { TwilioConfig } from '../components/Integrations/TwilioConfig';
import { ParticleBackground } from '../components/Particles/ParticleBackground';

export const Integrations: React.FC = () => {
  return (
    <div className="relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 relative inline-block">
            <span className="relative z-10">Integrations</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
          </h1>
          <p className="text-white/70">Connect your favorite tools and services</p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <LeadConnector />
          <WebhookConfig />
          <TwilioConfig />
        </div>
      </div>
    </div>
  );
};