import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

interface Transcript {
  id: string;
  text: string;
  speaker: 'agent' | 'client';
  timestamp: Date;
}

export const LiveTranscription: React.FC = () => {
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);

  useEffect(() => {
    // Simulate real-time transcription
    const demoTranscripts = [
      {
        id: '1',
        text: 'How can I assist you today?',
        speaker: 'agent',
        timestamp: new Date()
      },
      {
        id: '2',
        text: "I'd like to discuss the premium package options.",
        speaker: 'client',
        timestamp: new Date()
      }
    ] as Transcript[];

    setTranscripts(demoTranscripts);

    // Simulate ongoing transcription
    const interval = setInterval(() => {
      const newTranscript: Transcript = {
        id: Date.now().toString(),
        text: 'Let me explain our premium features in detail...',
        speaker: Math.random() > 0.5 ? 'agent' : 'client',
        timestamp: new Date()
      };
      setTranscripts(prev => [...prev, newTranscript]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 h-48 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5 text-primary-light" />
          <h3 className="text-white font-medium">Live Transcription</h3>
        </div>
        <span className="px-2 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-400">
          Live
        </span>
      </div>

      <div className="space-y-3 overflow-y-auto h-[calc(100%-2rem)]">
        {transcripts.map((transcript) => (
          <motion.div
            key={transcript.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start space-x-3"
          >
            <span className={`${
              transcript.speaker === 'agent' ? 'text-primary-light' : 'text-accent-light'
            } text-sm`}>
              {transcript.speaker === 'agent' ? 'Agent:' : 'Client:'}
            </span>
            <p className="text-white/80 text-sm">{transcript.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};