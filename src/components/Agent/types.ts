import { ReactNode } from 'react';

export interface Agent {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  status: 'active' | 'inactive';
}

export interface AgentType {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  features: string[];
  iconColor: string;
}