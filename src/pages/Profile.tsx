import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Mail, Phone, Camera, Save, CreditCard, Star, CheckCircle2 } from 'lucide-react';
import { ParticleBackground } from '../components/Particles/ParticleBackground';

export const Profile: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    company: 'Acme Corp',
    email: 'john@example.com',
    phone: '+1 (555) 0123',
    avatar: ''
  });

  const subscription = {
    plan: 'Professional',
    status: 'active',
    nextBilling: '2024-04-15',
    amount: 49.99,
    features: [
      'Unlimited agents',
      'Premium voice models',
      'Advanced analytics',
      'Priority support'
    ]
  };

  const handleSave = () => {
    // Save profile logic here
  };

  return (
    <div className="relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 relative inline-block">
            <span className="relative z-10">Profile Settings</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
          </h1>
          <p className="text-white/70">Manage your account settings and preferences</p>
        </header>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Profile Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 
                             flex items-center justify-center border-2 border-white/10 mb-4">
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-white" />
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-2 right-0 p-2 bg-primary rounded-full 
                           text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Camera className="w-4 h-4" />
                </motion.button>
              </div>
              <h2 className="text-xl font-semibold text-white">{profile.name}</h2>
              <p className="text-white/60">Administrator</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-white/90 text-sm block mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3
                             text-white placeholder-white/40 focus:outline-none focus:ring-2
                             focus:ring-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/90 text-sm block mb-2">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    value={profile.company}
                    onChange={(e) => setProfile(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3
                             text-white placeholder-white/40 focus:outline-none focus:ring-2
                             focus:ring-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/90 text-sm block mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3
                             text-white placeholder-white/40 focus:outline-none focus:ring-2
                             focus:ring-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/90 text-sm block mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3
                             text-white placeholder-white/40 focus:outline-none focus:ring-2
                             focus:ring-primary/50"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="w-full px-6 py-4 bg-gradient-to-r from-primary/80 to-accent/80 rounded-xl
                         text-white font-medium flex items-center justify-center space-x-2
                         hover:from-primary hover:to-accent transition-all duration-300
                         shadow-lg shadow-primary/25"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </motion.button>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                <CreditCard className="w-5 h-5 text-primary-light" />
              </div>
              <h2 className="text-xl font-semibold text-white">Subscription</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="text-white font-medium">{subscription.plan} Plan</h3>
                    <p className="text-emerald-400 text-sm">Active</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">${subscription.amount}/month</p>
                  <p className="text-white/60 text-sm">Next billing: {subscription.nextBilling}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-white/90 font-medium">Plan Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {subscription.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-white/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-light" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  Your subscription will automatically renew on {subscription.nextBilling}.
                  Manage your billing preferences in the Agency settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};