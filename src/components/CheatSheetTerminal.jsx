import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

export const CheatSheetTerminal = ({ snippets }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="glass rounded-xl overflow-hidden border border-slate-700/50 flex flex-col h-[400px]">
      <div className="bg-slate-800/80 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-slate-400" />
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Java_CheatSheet.sh</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
        </div>
      </div>

      <div className="flex shrink-0 bg-slate-900/50 border-b border-slate-700/50 overflow-x-auto no-scrollbar">
        {snippets.map((snip, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 text-[10px] font-mono border-r border-slate-700 transition-colors whitespace-nowrap ${
              activeTab === idx ? 'bg-cyan/10 text-cyan' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {snip.title}
          </button>
        ))}
      </div>

      <div className="flex-1 p-4 font-mono text-xs overflow-y-auto bg-slate-950/50 relative">
        <div className="text-slate-500 mb-2">$ cat {snippets[activeTab].title.toLowerCase().replace(/ /g, '_')}.java</div>
        <pre className="text-cyan/90 leading-relaxed">
          {snippets[activeTab].code}
        </pre>
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-cyan ml-1 translate-y-1" 
        />
      </div>
    </div>
  );
};
