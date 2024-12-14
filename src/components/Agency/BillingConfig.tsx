import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Plus, DollarSign, Check, Loader2, Link } from 'lucide-react';
import { CreatePlanModal } from './CreatePlanModal';

interface BillingConfigProps {
  onStripeConnect: () => void;
  isConnected: boolean;
}

interface Plan {
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
}

export const BillingConfig: React.FC<BillingConfigProps> = ({
  onStripeConnect,
  isConnected
}) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [stripeKey, setStripeKey] = useState('');
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);

  const handleConnect = () => {
    if (!stripeKey) return;
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      onStripeConnect();
    }, 2000);
  };

  const handleCreatePlan = (plan: Plan) => {
    setPlans(prev => [...prev, plan]);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
          <CreditCard className="w-5 h-5 text-primary-light" />
        </div>
        <h2 className="text-xl font-semibold text-white">Billing Configuration</h2>
      </div>

      {!isConnected ? (
        <div className="text-center py-8">
          <DollarSign className="w-12 h-12 text-primary-light mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">Connect Stripe Account</h3>
          <p className="text-white/60 mb-6">Enter your Stripe secret key to start accepting payments</p>
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="password"
              value={stripeKey}
              onChange={(e) => setStripeKey(e.target.value)}
              placeholder="sk_test_..."
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2
                       text-white placeholder-white/40 focus:outline-none focus:ring-2
                       focus:ring-primary/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConnect}
              disabled={isConnecting || !stripeKey}
              className="w-full px-6 py-3 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
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
                  <CreditCard className="w-4 h-4" />
                  <span>Connect Stripe</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-lg">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400">Stripe Connected Successfully</span>
            </div>
          </div>

          {plans.length > 0 ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Your Plans</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCreatePlan(true)}
                  className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
                           flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Plan</span>
                </motion.button>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-black/20 rounded-xl border border-white/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-white font-medium">{plan.name}</h4>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold text-white">${plan.price}</span>
                          <span className="text-white/60">/{plan.interval}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <Link className="w-4 h-4 text-white/40 hover:text-white/70" />
                      </motion.button>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-white/70">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium text-white mb-4">Create Your First Plan</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCreatePlan(true)}
                className="px-6 py-3 bg-primary/20 hover:bg-primary/30 rounded-lg text-white
                         flex items-center space-x-2 mx-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Create Subscription Plan</span>
              </motion.button>
            </div>
          )}
        </div>
      )}

      <CreatePlanModal
        isOpen={showCreatePlan}
        onClose={() => setShowCreatePlan(false)}
        onCreatePlan={handleCreatePlan}
      />
    </div>
  );
};