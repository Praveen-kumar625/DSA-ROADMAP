import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const HeroSection = ({ quote }) => {
  const [timeLeft, setTimeLeft] = useState(180 * 24 * 60 * 60); // 180 days in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { d, h, m, s };
  };

  const { d, h, m, s } = formatTime(timeLeft);

  return (
    <section className="lg:col-span-12 mb-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-xl relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              MISSION: <span className="text-cyan">DSA_MASTERY</span>
            </h2>
            <p className="text-slate-400 max-w-2xl italic font-serif text-lg">
              "{quote}"
            </p>
          </div>

          <div className="glass bg-slate-900/40 p-6 rounded-lg border-cyan/20 min-w-[280px]">
            <div className="flex items-center gap-2 text-cyan mb-3 font-mono text-xs uppercase tracking-widest">
              <Clock size={14} />
              Operational Window Remaining
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: 'DAYS', value: d },
                { label: 'HRS', value: h },
                { label: 'MIN', value: m },
                { label: 'SEC', value: s },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-mono font-bold text-white">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-[9px] text-slate-500 uppercase">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, #00f0ff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />
      </motion.div>
    </section>
  );
};
