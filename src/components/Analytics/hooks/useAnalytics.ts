import { useMetrics } from './useMetrics';
import { useSessions } from './useSessions';

export const useAnalytics = () => {
  const { metrics, isLoading: metricsLoading } = useMetrics();
  const { sessions, isLoading: sessionsLoading } = useSessions();

  return {
    metrics,
    sessions,
    isLoading: metricsLoading || sessionsLoading
  };
};