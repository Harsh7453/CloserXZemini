import React from 'react';
import { Users, Clock, Calendar, Video } from 'lucide-react';
import { MetricCard } from './MetricCard';
import type { Metrics } from '../types';

interface SessionMetricsProps {
  metrics: Metrics;
  isLoading: boolean;
}

export const SessionMetrics: React.FC<SessionMetricsProps> = ({ metrics, isLoading }) => {
  const metricCards = [
    {
      icon: <Users className="w-5 h-5" />,
      label: 'Total Clients',
      value: metrics.totalClients,
      change: '+12%',
      trend: 'up'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Avg. Session Duration',
      value: '28 mins',
      change: '-5%',
      trend: 'down'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Sessions This Week',
      value: metrics.weeklySessionCount,
      change: '+8%',
      trend: 'up'
    },
    {
      icon: <Video className="w-5 h-5" />,
      label: 'Active Sessions',
      value: metrics.activeSessionCount,
      change: '0%',
      trend: 'neutral'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metricCards.map((metric, index) => (
        <MetricCard key={index} {...metric} isLoading={isLoading} />
      ))}
    </div>
  );
};