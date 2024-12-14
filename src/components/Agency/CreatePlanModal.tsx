import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, CreditCard } from 'lucide-react';

interface CreatePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePlan: (plan: Plan) => void;
}

interface Plan {
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
}

export const CreatePlanModal: React.FC<CreatePlanModalProps> = ({
  isOpen,
  onClose,
  onCreatePlan
}) => {
  const [plan, setPlan] = useState<Plan>({
    name: '',
    price: 0,
    interval: 'month',
    features: ['']
  });

  const handleAddFeature = () => {
    setPlan(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...plan.features];
    newFeatures[index] = value;
    setPlan(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const handleSubmit = () => {
    onCreatePlan(plan);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-gradient-to-br from-gray-900/95 to-purple-900/95 backdrop-blur-xl p-8 rounded-2xl 
                   border border-white/20 w-full max-w-lg shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-1">Create Subscription Plan</h2>
              <p className="text-white/60 text-sm">Configure your plan details and features</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white/70" />
            </motion.button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-white/90 text-sm font-medium block mb-2">Plan Name</label>
              <input
                type="text"
                value={plan.name}
                onChange={e => setPlan(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., Professional Plan"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3
                         text-white placeholder-white/40 focus:outline-none focus:ring-2
                         focus:ring-primary/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-white/90 text-sm font-medium block mb-2">Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                  <input
                    type="number"
                    value={plan.price}
                    onChange={e => setPlan(prev => ({ ...prev, price: Number(e.target.value) }))}
                    placeholder="99.99"
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-8 pr-4 py-3
                             text-white placeholder-white/40 focus:outline-none focus:ring-2
                             focus:ring-primary/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/90 text-sm font-medium block mb-2">Billing Interval</label>
                <select
                  value={plan.interval}
                  onChange={e => setPlan(prev => ({ ...prev, interval: e.target.value as 'month' | 'year' }))}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3
                           text-white focus:outline-none focus:ring-2 focus:ring-primary/50
                           appearance-none cursor-pointer"
                >
                  <option value="month">Monthly</option>
                  <option value="year">Yearly</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-white/90 text-sm font-medium block mb-2">Features</label>
              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <input
                    key={index}
                    type="text"
                    value={feature}
                    onChange={e => handleFeatureChange(index, e.target.value)}
                    placeholder="e.g., Unlimited agents"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3
                             text-white placeholder-white/40 focus:outline-none focus:ring-2
                             focus:ring-primary/50"
                  />
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddFeature}
                  className="w-full px-4 py-3 border-2 border-dashed border-white/20 rounded-xl
                           text-white/60 hover:text-white hover:border-white/40 transition-all
                           flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Feature</span>
                </motion.button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary/80 to-accent/80 rounded-xl
                       text-white font-medium flex items-center justify-center space-x-2 mt-8
                       hover:from-primary hover:to-accent transition-all duration-300
                       shadow-lg shadow-primary/25"
            >
              <CreditCard className="w-5 h-5" />
              <span>Create Plan</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};