import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Save, Check } from 'lucide-react';

export const JavaScriptSnippet: React.FC = () => {
  const [snippet, setSnippet] = useState(`<!-- Add your support widget code here -->
<script>
  // Example:
  // Intercom, Zendesk, Drift, etc.
  // Paste your widget installation code
</script>`);
  
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
          <Code className="w-5 h-5 text-primary-light" />
        </div>
        <h2 className="text-xl font-semibold text-white">Add Your Support Widget</h2>
      </div>

      <div className="space-y-4">
        <p className="text-white/70">
          Add your support widget installation code below. You can use any provider like Intercom,
          Zendesk, Drift, or your custom widget code.
        </p>

        <div className="relative">
          <textarea
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            className="w-full h-[200px] bg-black/20 rounded-xl p-4 text-white/90 font-mono text-sm
                     border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50
                     focus:outline-none resize-none"
            placeholder="Paste your widget installation code here..."
          />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="absolute top-4 right-4 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg
                     flex items-center space-x-2 transition-all"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm">Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4 text-white/70" />
                <span className="text-white/70 text-sm">Save</span>
              </>
            )}
          </motion.button>
        </div>

        <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
          <p className="text-amber-400 text-sm">
            Make sure to test your widget in a development environment before deploying to production.
            Some widgets may require additional configuration in their respective dashboards.
          </p>
        </div>
      </div>
    </div>
  );
};