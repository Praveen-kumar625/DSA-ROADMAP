import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code, BookOpen, Target, ExternalLink } from 'lucide-react';

export const DailyTask = ({ task, isCompleted, onToggle }) => {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className={`glass p-5 rounded-xl border-l-4 transition-all ${isCompleted ? 'border-l-emerald-500 bg-emerald-500/5' : 'border-l-cyan/50 hover:bg-cyan/5'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-mono text-cyan/70 uppercase tracking-widest block mb-1">DAYS {task.days}</span>
          <h4 className="text-lg font-bold text-white leading-tight">{task.title}</h4>
        </div>
        <button 
          onClick={onToggle}
          className={`w-6 h-6 rounded border transition-all flex items-center justify-center ${isCompleted ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-600 text-transparent hover:border-cyan'}`}
        >
          <CheckCircle2 size={16} />
        </button>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <Target size={14} className="text-gold mt-0.5 shrink-0" />
          <p className="text-xs text-slate-400"><span className="text-slate-500 font-mono uppercase text-[9px] mr-1">Goal:</span> {task.goal}</p>
        </div>
        <div className="flex items-start gap-3">
          <BookOpen size={14} className="text-blue-400 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-400"><span className="text-slate-500 font-mono uppercase text-[9px] mr-1">Concept:</span> {task.concept}</p>
        </div>
        <div className="flex items-start gap-3">
          <Code size={14} className="text-purple-400 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-400"><span className="text-slate-500 font-mono uppercase text-[9px] mr-1">Task:</span> {task.task}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
        <div className="flex flex-col">
          <span className="text-[9px] text-slate-500 uppercase font-mono">LeetCode / GFG</span>
          <span className="text-[11px] text-white font-medium flex items-center gap-1">
            {task.problem} <ExternalLink size={10} className="text-slate-500" />
          </span>
        </div>
        <div className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
          task.difficulty === 'Hard' ? 'bg-red-500/10 text-red-400' :
          task.difficulty === 'Revision' ? 'bg-blue-500/10 text-blue-400' :
          'bg-emerald-500/10 text-emerald-400'
        }`}>
          {task.difficulty}
        </div>
      </div>
    </motion.div>
  );
};
