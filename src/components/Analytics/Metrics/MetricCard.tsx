import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  isLoading: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  label,
  value,
  change,
  trend,
  isLoading
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-rose-400" />;
      default:
        return <Minus className="w-4 h-4 text-white/40" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-emerald-400';
      case 'down':
        return 'text-rose-400';
      default:
        return 'text-white/40';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300"
    >
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-8 bg-white/20 rounded-lg" />
          <div className="h-4 w-24 bg-white/20 rounded" />
          <div className="h-6 w-16 bg-white/20 rounded" />
        </div>
      ) : (
        <>
          <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg w-fit mb-4">
            <div className="text-primary-light">{icon}</div>
          </div>
          <h3 className="text-white/60 text-sm mb-1">{label}</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold text-white">{value}</span>
            <div className="flex items-center space-x-1">
              {getTrendIcon()}
              <span className={`text-sm ${getTrendColor()}`}>{change}</span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};