import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, ChevronDown, ChevronUp, Zap, HelpCircle } from 'lucide-react';
import { DailyTask } from './DailyTask';

export const PhaseCard = ({ phase, isLocked, isExpanded, onToggle, completedTasks, onTaskToggle, onStartQuiz }) => {
  const isPhaseCompleted = phase.days.every(day => completedTasks.includes(day.id));

  return (
    <div className={`mb-6 rounded-xl transition-all duration-500 ${isLocked ? 'opacity-50 grayscale' : 'opacity-100'}`}>
      <div 
        onClick={!isLocked ? onToggle : undefined}
        className={`glass p-6 rounded-xl cursor-pointer flex items-center justify-between transition-all group ${!isLocked && 'hover:border-cyan/50'}`}
      >
        <div className="flex items-center gap-6">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-xl ${isLocked ? 'bg-slate-800 text-slate-500' : 'bg-cyan/10 text-cyan neon-border'}`}>
            {isLocked ? <Lock size={20} /> : phase.id}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">{phase.title}</h3>
              <span className={`text-[10px] px-2 py-0.5 rounded border ${phase.difficulty === 'Hard' ? 'border-red-500/50 text-red-400' : 'border-cyan/50 text-cyan'}`}>
                {phase.difficulty}
              </span>
            </div>
            <p className="text-sm text-slate-500 font-mono italic">"{phase.quote}"</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:block text-right">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Schedule</div>
            <div className="text-sm text-white font-mono uppercase">{phase.weeks} Weeks</div>
          </div>
          {!isLocked && (
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown className="text-slate-500 group-hover:text-cyan" />
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && !isLocked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Did You Know Egg */}
              <div className="col-span-full glass bg-cyan/5 border-cyan/20 p-4 rounded-lg flex items-start gap-4 mb-2">
                <div className="p-2 rounded bg-cyan/10 text-cyan">
                  <HelpCircle size={18} className="animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan uppercase tracking-widest">Tactical Intelligence</span>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">{phase.didYouKnow}</p>
                </div>
              </div>

              {phase.days.map((day) => (
                <DailyTask 
                  key={day.id}
                  task={day}
                  isCompleted={completedTasks.includes(day.id)}
                  onToggle={() => onTaskToggle(day.id)}
                />
              ))}

              {/* Boss Fight Unlocker */}
              <div className="col-span-full mt-4">
                <button
                  onClick={onStartQuiz}
                  disabled={!isPhaseCompleted}
                  className={`w-full py-4 rounded-xl font-mono font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${
                    isPhaseCompleted 
                      ? 'bg-gold/10 text-gold border border-gold/50 hover:bg-gold/20 shadow-[0_0_20px_rgba(255,183,3,0.1)]' 
                      : 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed'
                  }`}
                >
                  <Zap size={18} fill={isPhaseCompleted ? "currentColor" : "none"} />
                  {isPhaseCompleted ? 'Engage Boss Fight (Unlock Next Phase)' : 'Complete All Tasks to Unlock Boss Fight'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
