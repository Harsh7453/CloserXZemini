import React from 'react';
import { Video, Mic, Clock, Calendar } from 'lucide-react';
import type { Session } from '../types';

interface SessionCardProps {
  session: Session;
}

export const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const getStatusColor = () => {
    switch (session.status) {
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-400';
      case 'in-progress':
        return 'bg-sky-500/20 text-sky-400';
      case 'scheduled':
        return 'bg-amber-500/20 text-amber-400';
      default:
        return 'bg-white/20 text-white/60';
    }
  };

  return (
    <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
            {session.type === 'video' ? (
              <Video className="w-5 h-5 text-primary-light" />
            ) : (
              <Mic className="w-5 h-5 text-primary-light" />
            )}
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">{session.clientName}</h4>
            <div className="flex items-center space-x-3 text-sm text-white/60">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-primary-light" />
                {new Date(session.startTime).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-accent-light" />
                {session.duration} mins
              </div>
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor()}`}>
          {session.status}
        </span>
      </div>
      
      <div className="mt-3 flex flex-wrap gap-2">
        {session.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/70 hover:bg-white/20 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};