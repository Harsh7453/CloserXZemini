import React from 'react';
import { motion } from 'framer-motion';
import { SessionMetrics } from './Metrics/SessionMetrics';
import { SessionTimeline } from './Timeline/SessionTimeline';
import { SessionNotes } from './Notes/SessionNotes';
import { SessionTags } from './Tags/SessionTags';
import { useAnalytics } from './hooks/useAnalytics';

export const AnalyticsPage: React.FC = () => {
  const { metrics, sessions, isLoading } = useAnalytics();

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Analytics Dashboard</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-primary/20 rounded-lg text-white hover:bg-primary/30 transition-all"
        >
          Export Report
        </motion.button>
      </header>

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
  );
};