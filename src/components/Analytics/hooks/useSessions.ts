import { useState, useEffect } from 'react';
import type { Session } from '../types';

export const useSessions = () => {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      clientName: 'Sarah Johnson',
      type: 'video',
      status: 'completed',
      startTime: '2024-03-15T14:30:00',
      duration: 25,
      tags: ['Appointment Booked', 'Follow-up Required']
    },
    {
      id: '2',
      clientName: 'Michael Chen',
      type: 'audio',
      status: 'in-progress',
      startTime: '2024-03-15T15:00:00',
      duration: 15,
      tags: ['Information Requested']
    },
    {
      id: '3',
      clientName: 'Emma Davis',
      type: 'video',
      status: 'scheduled',
      startTime: '2024-03-15T16:00:00',
      duration: 0,
      tags: ['Payment Pending']
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Fetch sessions here
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    sessions,
    isLoading
  };
};