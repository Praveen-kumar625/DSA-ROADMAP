import React from 'react';
import { motion } from 'framer-motion';

export const BadgeCase = ({ badges, unlockedBadges }) => {
  return (
    <div className="glass p-6 rounded-xl border border-slate-700/50">
      <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Milestone Badges</h3>
      <div className="grid grid-cols-3 gap-4">
        {badges.map((badge) => {
          const isUnlocked = unlockedBadges.includes(badge.id);
          return (
            <motion.div
              key={badge.id}
              whileHover={isUnlocked ? { scale: 1.1, rotate: 5 } : {}}
              className={`aspect-square rounded-lg flex flex-col items-center justify-center relative group ${
                isUnlocked ? 'bg-gold/10 gold-border' : 'bg-slate-800/50 border border-slate-700 opacity-40'
              }`}
            >
              <div className={`text-2xl mb-1 ${isUnlocked ? 'drop-shadow-[0_0_8px_rgba(255,183,3,0.5)]' : ''}`}>
                {badge.icon}
              </div>
              <span className="text-[8px] font-mono text-center px-1 uppercase tracking-tighter text-slate-400">
                {badge.name.split(' ')[0]}
              </span>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-slate-900 text-[10px] rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <div className="font-bold text-gold mb-1">{badge.name}</div>
                <div className="text-slate-400">{badge.description}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
