import React from 'react';
import { motion } from 'framer-motion';
import { roadmapData } from '../data';
import { BadgeCase } from './BadgeCase';

export const Sidebar = ({ unlockedPhases, progress, unlockedBadges }) => {
  return (
    <aside className="lg:col-span-3 space-y-8">
      {/* Progress Circle Card */}
      <div className="glass p-8 rounded-xl text-center relative overflow-hidden group">
        <div className="relative z-10">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64" cy="64" r="58"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-800"
              />
              <motion.circle
                cx="64" cy="64" r="58"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="364.4"
                initial={{ strokeDashoffset: 364.4 }}
                animate={{ strokeDashoffset: 364.4 - (364.4 * progress) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-mono font-bold text-white">{progress}%</span>
              <span className="text-[8px] text-slate-500 uppercase tracking-widest">Complete</span>
            </div>
          </div>
          <h3 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-2">System Sync Status</h3>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-1.5 h-3 rounded-full ${i < (progress / 20) ? 'bg-cyan animate-pulse' : 'bg-slate-800'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Phase Quick Nav */}
      <nav className="glass p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Phase Protocols</h3>
        <ul className="space-y-3">
          {roadmapData.phases.map((phase) => {
            const isUnlocked = unlockedPhases.includes(phase.id);
            return (
              <li key={phase.id} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${isUnlocked ? 'bg-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'bg-slate-700'}`} />
                <span className={`text-[11px] font-mono uppercase tracking-wider ${isUnlocked ? 'text-slate-300' : 'text-slate-600'}`}>
                  Phase_0{phase.id}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      <BadgeCase badges={roadmapData.badges} unlockedBadges={unlockedBadges} />
    </aside>
  );
};
