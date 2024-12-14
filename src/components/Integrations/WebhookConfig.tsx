import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Webhook, Plus, Copy, Check, Trash2 } from 'lucide-react';

interface WebhookEndpoint {
  id: string;
  url: string;
  events: string[];
  active: boolean;
}

export const WebhookConfig: React.FC = () => {
  const [webhooks, setWebhooks] = useState<WebhookEndpoint[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newWebhook, setNewWebhook] = useState({ url: '', events: ['all'] });

  const handleAddWebhook = () => {
    if (!newWebhook.url) return;
    setWebhooks(prev => [...prev, {
      id: Date.now().toString(),
      url: newWebhook.url,
      events: newWebhook.events,
      active: true
    }]);
    setNewWebhook({ url: '', events: ['all'] });
    setShowAddForm(false);
  };

  const handleDeleteWebhook = (id: string) => {
    setWebhooks(prev => prev.filter(webhook => webhook.id !== id));
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
            <Webhook className="w-5 h-5 text-primary-light" />
          </div>
          <h2 className="text-xl font-semibold text-white">Webhook Configuration</h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
                   flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Webhook</span>
        </motion.button>
      </div>

      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-black/20 rounded-xl border border-white/10"
        >
          <div className="space-y-4">
            <div>
              <label className="text-white/90 text-sm block mb-2">Webhook URL</label>
              <input
                type="url"
                value={newWebhook.url}
                onChange={(e) => setNewWebhook(prev => ({ ...prev, url: e.target.value }))}
                placeholder="https://your-crm.com/webhook"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2
                         text-white placeholder-white/40 focus:outline-none focus:ring-2
                         focus:ring-primary/50"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddWebhook}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-white"
              >
                Add Webhook
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="space-y-4">
        {webhooks.map((webhook) => (
          <motion.div
            key={webhook.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-black/20 rounded-xl border border-white/10 group"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">{webhook.url}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigator.clipboard.writeText(webhook.url)}
                    className="p-1 hover:bg-white/5 rounded transition-colors"
                  >
                    <Copy className="w-4 h-4 text-white/40" />
                  </motion.button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-primary/20 rounded text-xs text-primary-light">
                    All Events
                  </span>
                  {webhook.active && (
                    <span className="px-2 py-1 bg-emerald-500/20 rounded text-xs text-emerald-400">
                      Active
                    </span>
                  )}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDeleteWebhook(webhook.id)}
                className="p-2 hover:bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 className="w-4 h-4 text-rose-400" />
              </motion.button>
            </div>
          </motion.div>
        ))}

        {webhooks.length === 0 && !showAddForm && (
          <div className="text-center py-8 text-white/60">
            No webhooks configured. Click "Add Webhook" to get started.
          </div>
        )}
      </div>
    </div>
  );
};