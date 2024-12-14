import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Edit, Save, X } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  subject: string;
  content: string;
}

export const EmailTemplates: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<Template>({
    id: 'welcome',
    name: 'Welcome Email',
    subject: 'Welcome to {{company_name}}',
    content: `Dear {{user_name}},

Thank you for choosing {{company_name}}! We're excited to have you on board.

Your account has been successfully created with the following credentials:
Email: {{user_email}}
Password: {{temp_password}}

For security reasons, we recommend changing your password upon your first login.

Best regards,
The {{company_name}} Team`
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save template logic here
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
          <Mail className="w-5 h-5 text-primary-light" />
        </div>
        <h2 className="text-xl font-semibold text-white">Welcome Email Template</h2>
      </div>

      <div className="space-y-4">
        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={editingTemplate.subject}
              onChange={(e) => setEditingTemplate({
                ...editingTemplate,
                subject: e.target.value
              })}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2
                       text-white placeholder-white/40 focus:outline-none focus:ring-2
                       focus:ring-primary/50"
              placeholder="Email subject"
            />
            <textarea
              value={editingTemplate.content}
              onChange={(e) => setEditingTemplate({
                ...editingTemplate,
                content: e.target.value
              })}
              className="w-full h-[300px] bg-black/20 border border-white/10 rounded-lg px-4 py-2
                       text-white placeholder-white/40 focus:outline-none focus:ring-2
                       focus:ring-primary/50 font-mono text-sm"
              placeholder="Email content"
            />
            <div className="flex justify-end space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white
                         flex items-center space-x-2"
              >
                <X className="w-4 h-4" />
                <span>Cancel</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
                         flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-black/20 rounded-xl border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white font-medium mb-1">Subject:</h3>
                <p className="text-white/60">{editingTemplate.subject}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsEditing(true)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <Edit className="w-4 h-4 text-white/40 hover:text-white/70" />
              </motion.button>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Content:</h3>
              <pre className="text-white/60 whitespace-pre-wrap font-mono text-sm">
                {editingTemplate.content}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};