import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart, Building2, Link2, Video } from 'lucide-react';
import { UserProfile } from './UserProfile';

export const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 border-b border-white/10 backdrop-blur-xl bg-white/5 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-white font-semibold text-lg">AI Assistant</Link>
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                  ${location.pathname === '/' 
                    ? 'bg-primary/20 text-white' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Agent</span>
              </Link>
              <Link
                to="/consultation"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                  ${location.pathname === '/consultation'
                    ? 'bg-primary/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                <Video className="w-4 h-4" />
                <span>Consultation</span>
              </Link>
              <Link
                to="/analytics"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                  ${location.pathname === '/analytics'
                    ? 'bg-primary/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                <BarChart className="w-4 h-4" />
                <span>Analytics</span>
              </Link>
              <Link
                to="/agency"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                  ${location.pathname === '/agency'
                    ? 'bg-primary/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                <Building2 className="w-4 h-4" />
                <span>Agency</span>
              </Link>
              <Link
                to="/integrations"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                  ${location.pathname === '/integrations'
                    ? 'bg-primary/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                <Link2 className="w-4 h-4" />
                <span>Integrations</span>
              </Link>
            </div>
          </div>
          <UserProfile />
        </div>
      </div>
    </nav>
  );
};