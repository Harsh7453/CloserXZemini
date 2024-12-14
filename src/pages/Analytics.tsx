import React from 'react';
import { motion } from 'framer-motion';
import { SessionMetrics } from '../components/Analytics/Metrics/SessionMetrics';
import { SessionTimeline } from '../components/Analytics/Timeline/SessionTimeline';
import { SessionNotes } from '../components/Analytics/Notes/SessionNotes';
import { SessionTags } from '../components/Analytics/Tags/SessionTags';
import { useAnalytics } from '../components/Analytics/hooks/useAnalytics';
import { ParticleBackground } from '../components/Particles/ParticleBackground';

export const Analytics: React.FC = () => {
  const { metrics, sessions, isLoading } = useAnalytics();

  return (
    <div className="relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 relative inline-block">
            <span className="relative z-10">Analytics Dashboard</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
          </h1>
          <p className="text-white/70">Track and analyze your AI agent's performance</p>
        </header>

        <div className="max-w-7xl mx-auto space-y-8">
          <SessionMetrics metrics={metrics} isLoading={isLoading} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SessionTimeline sessions={sessions} isLoading={isLoading} />
            </div>
            <div className="space-y-6">
              <SessionTags />
              <SessionNotes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};