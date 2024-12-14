import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Plus, Check, Copy, ExternalLink, Loader2 } from 'lucide-react';

export const DomainConfig: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [showDNS, setShowDNS] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const dnsRecords = [
    { type: 'A', name: '@', value: '76.76.21.21' },
    { type: 'CNAME', name: 'www', value: 'proxy.yourdomain.com' }
  ];

  const handleSaveDomain = () => {
    if (!domain) return;
    setShowDNS(true);
  };

  const handleVerifyDomain = () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
          <Globe className="w-5 h-5 text-primary-light" />
        </div>
        <h2 className="text-xl font-semibold text-white">Domain Configuration</h2>
      </div>

      <div className="space-y-6">
        <div className="flex space-x-2">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter your domain (e.g., app.yourdomain.com)"
            disabled={showDNS}
            className="flex-1 bg-black/20 border border-white/10 rounded-lg px-4 py-2
                     text-white placeholder-white/40 focus:outline-none focus:ring-2
                     focus:ring-primary/50 disabled:opacity-50"
          />
          {!showDNS ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSaveDomain}
              className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
                       flex items-center space-x-2 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Save</span>
            </motion.button>
          ) : null}
        </div>

        {showDNS && !isVerified && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-white/90 font-medium mb-3">Required DNS Records</h3>
              <p className="text-white/60 text-sm mb-4">
                Add these records to your domain's DNS configuration to verify ownership:
              </p>
              <div className="space-y-2">
                {dnsRecords.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-black/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="px-2 py-1 bg-primary/20 rounded text-xs text-primary-light">
                        {record.type}
                      </span>
                      <span className="text-white/70">{record.name}</span>
                      <span className="text-white">{record.value}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-white/5 rounded-lg transition-colors group"
                      onClick={() => navigator.clipboard.writeText(record.value)}
                    >
                      <Copy className="w-4 h-4 text-white/40 group-hover:text-white/70" />
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVerifyDomain}
              disabled={isVerifying}
              className="w-full px-4 py-3 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
                       flex items-center justify-center space-x-2 transition-all
                       disabled:opacity-50"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying DNS Records...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Verify Domain</span>
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {isVerified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Domain Verified Successfully</span>
              </div>
              <a
                href={`https://${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-white/70 hover:text-white transition-colors"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};