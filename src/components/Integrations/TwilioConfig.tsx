import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Plus, Check, Loader2, RefreshCw, Globe, ChevronDown } from 'lucide-react';

interface TwilioCredentials {
  accountSid: string;
  authToken: string;
}

interface PhoneNumber {
  number: string;
  status: 'active' | 'pending';
  country: string;
}

interface Country {
  code: string;
  name: string;
  flag: string;
}

const countries: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
];

export const TwilioConfig: React.FC = () => {
  const [credentials, setCredentials] = useState<TwilioCredentials>({
    accountSid: '',
    authToken: ''
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showNumberModal, setShowNumberModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const handleConnect = () => {
    if (!credentials.accountSid || !credentials.authToken) return;
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      // Add some sample existing numbers
      setPhoneNumbers([
        { number: '+1 (555) 0123', status: 'active', country: 'US' },
        { number: '+1 (555) 0124', status: 'active', country: 'US' },
      ]);
    }, 2000);
  };

  const handleBuyNumber = () => {
    setIsLoading(true);
    // Simulate number purchase
    setTimeout(() => {
      setPhoneNumbers(prev => [...prev, {
        number: `+${selectedCountry.code === 'US' ? '1' : '44'} (${Math.floor(Math.random() * 1000)}) ${Math.floor(Math.random() * 10000)}`,
        status: 'active',
        country: selectedCountry.code
      }]);
      setIsLoading(false);
      setShowNumberModal(false);
    }, 2000);
  };

  const NumberSelectionModal = () => (
    <AnimatePresence>
      {showNumberModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowNumberModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900/95 to-purple-900/95 backdrop-blur-xl p-6 rounded-2xl 
                     border border-white/20 w-full max-w-md"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Get Phone Number</h3>
            
            <div className="space-y-6">
              <div className="relative">
                <label className="text-white/90 text-sm block mb-2">Select Country</label>
                <button
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl
                           text-white flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{selectedCountry.flag}</span>
                    <span>{selectedCountry.name}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showCountryDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 right-0 mt-2 bg-gray-900/95 border border-white/10 
                             rounded-xl overflow-hidden z-50"
                  >
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowCountryDropdown(false);
                        }}
                        className="w-full px-4 py-3 flex items-center space-x-2 hover:bg-white/5
                                 text-white transition-colors"
                      >
                        <span className="text-2xl">{country.flag}</span>
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowNumberModal(false)}
                  className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-white"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBuyNumber}
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-primary/20 hover:bg-primary/30 rounded-xl text-white
                           flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Purchasing...</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Purchase Number</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
          <Phone className="w-5 h-5 text-primary-light" />
        </div>
        <h2 className="text-xl font-semibold text-white">Twilio Configuration</h2>
      </div>

      {!isConnected ? (
        <div className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-white/90 text-sm block mb-2">Account SID</label>
              <input
                type="text"
                value={credentials.accountSid}
                onChange={(e) => setCredentials(prev => ({ ...prev, accountSid: e.target.value }))}
                placeholder="Enter your Twilio Account SID"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2
                         text-white placeholder-white/40 focus:outline-none focus:ring-2
                         focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-white/90 text-sm block mb-2">Auth Token</label>
              <input
                type="password"
                value={credentials.authToken}
                onChange={(e) => setCredentials(prev => ({ ...prev, authToken: e.target.value }))}
                placeholder="Enter your Twilio Auth Token"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2
                         text-white placeholder-white/40 focus:outline-none focus:ring-2
                         focus:ring-primary/50"
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConnect}
            disabled={isConnecting || !credentials.accountSid || !credentials.authToken}
            className="w-full px-4 py-3 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
                     flex items-center justify-center space-x-2 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isConnecting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Connecting...</span>
              </>
            ) : (
              <>
                <Phone className="w-4 h-4" />
                <span>Connect Twilio</span>
              </>
            )}
          </motion.button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-lg">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400">Connected to Twilio</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsConnected(false)}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-white/70
                       hover:text-white transition-all text-sm"
            >
              Disconnect
            </motion.button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Phone Numbers</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowNumberModal(true)}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
                         flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Get Number</span>
              </motion.button>
            </div>

            <div className="space-y-3">
              {phoneNumbers.map((phone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-black/20 rounded-xl border border-white/10 hover:border-primary/30 
                           transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-1.5 bg-white/5 rounded-lg">
                        <Phone className="w-4 h-4 text-primary-light" />
                      </div>
                      <div>
                        <span className="text-white font-medium">{phone.number}</span>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-white/40">
                            {countries.find(c => c.code === phone.country)?.name}
                          </span>
                          <span className="text-2xl">
                            {countries.find(c => c.code === phone.country)?.flag}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-emerald-500/20 rounded text-xs text-emerald-400">
                      Active
                    </span>
                  </div>
                </motion.div>
              ))}

              {phoneNumbers.length === 0 && (
                <div className="text-center py-8 text-white/60">
                  No phone numbers yet. Click "Get Number" to add your first number.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <NumberSelectionModal />
    </div>
  );
};