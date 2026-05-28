import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Trophy, Activity, Menu } from 'lucide-react';
import { LiquidMenu } from './LiquidMenu';

export const Layout = ({ children, progress, currentPhase, badgesCount }) => {
  return (
    <div className="min-h-screen bg-background text-slate-300 font-sans selection:bg-cyan/30 relative">
      {/* Praveen Kumar Watermark - Visible Everywhere */}
      <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden opacity-[0.03]">
        <h1 className="text-[12vw] font-bold text-white whitespace-nowrap -rotate-45 tracking-widest uppercase">
          PRAVEEN KUMAR
        </h1>
      </div>

      {/* Tactical HUD Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-700/50 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-cyan/10 flex items-center justify-center neon-border z-10">
            <Terminal className="text-cyan w-6 h-6" />
          </div>
          <div className="z-10 cursor-pointer select-none" onDoubleClick={() => {
            document.body.style.backgroundImage = 'url("https://media.giphy.com/media/A06m7eA9I703vL6Qvj/giphy.gif")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundBlendMode = 'overlay';
            document.body.style.backgroundColor = 'rgba(13, 17, 23, 0.8)';
            setTimeout(() => {
              document.body.style.backgroundImage = '';
              document.body.style.backgroundBlendMode = '';
              document.body.style.backgroundColor = '';
            }, 5000);
          }}>
            <h1 className="font-mono font-bold text-cyan tracking-tighter uppercase text-sm hover:text-white transition-colors">DSA_MASTERY_OS</h1>
            <p className="text-[10px] text-slate-500 font-mono">BY PRAVEEN KUMAR</p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 items-center font-mono text-[11px] uppercase tracking-widest z-10">
          <div className="flex flex-col items-end">
            <span className="text-slate-500">Progress</span>
            <span className="text-cyan">{progress}%</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-slate-500">Phase</span>
            <span className="text-gold">0{currentPhase}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-slate-500">Badges</span>
            <span className="text-cyan">{badgesCount}/06</span>
          </div>
        </div>

        <LiquidMenu />
      </header>

      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {children}
      </main>

      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] -left-[10%] w-[40%] h-[40%] bg-cyan/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] -right-[10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>
    </div>
  );
};
