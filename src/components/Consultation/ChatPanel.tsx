import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

interface ChatPanelProps {
  onClose: () => void;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I assist you today?',
      sender: 'agent',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I understand. Let me help you with that.',
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 h-full flex flex-col">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h3 className="text-white font-medium">Chat</h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded-lg transition-all"
        >
          <X className="w-5 h-5 text-white/70" />
        </motion.button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl ${
                msg.sender === 'user'
                  ? 'bg-primary/20 text-white ml-auto'
                  : 'bg-white/10 text-white/90'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-xs text-white/50 mt-1 block">
                {msg.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            rows={1}
            className="w-full bg-black/20 border border-white/10 rounded-xl pl-4 pr-12 py-3
                     text-white placeholder-white/40 focus:outline-none focus:ring-2
                     focus:ring-primary/50 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSendMessage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary/20 
                     hover:bg-primary/30 rounded-lg transition-all"
          >
            <Send className="w-4 h-4 text-primary-light" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};