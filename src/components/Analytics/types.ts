export interface Metrics {
  totalClients: number;
  weeklySessionCount: number;
  activeSessionCount: number;
  averageSessionDuration: number;
}

export interface Session {
  id: string;
  clientName: string;
  type: 'video' | 'audio';
  status: 'completed' | 'scheduled' | 'in-progress';
  startTime: string;
  duration: number;
  tags: string[];
  notes?: string;
}

export interface Note {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  sessionId: string;
}

export interface Tag {
  name: string;
  count: number;
  color: string;
}