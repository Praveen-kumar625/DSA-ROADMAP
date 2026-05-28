import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, CheckCircle2, AlertCircle } from 'lucide-react';

export const QuizModal = ({ phase, isOpen, onClose, onPass }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsCompleted] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (selectedOption === phase.quiz.answer) {
      setIsCompleted(true);
      setTimeout(() => {
        onPass();
        onClose();
        // Reset state for next time
        setSelectedOption(null);
        setIsCompleted(false);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative glass w-full max-w-lg rounded-2xl border-gold/30 overflow-hidden shadow-[0_0_50px_rgba(255,183,3,0.15)]"
      >
        <div className="bg-gold/10 p-6 flex items-center justify-between border-b border-gold/20">
          <div className="flex items-center gap-3 text-gold font-mono uppercase tracking-[0.2em]">
            <ShieldAlert size={20} />
            Phase Gate: Boss Fight
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Requirement: Verify Knowledge</span>
            <h3 className="text-xl font-bold text-white leading-tight">
              {phase.quiz.question}
            </h3>
          </div>

          <div className="space-y-3 mb-8">
            {phase.quiz.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(idx)}
                className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between group ${
                  selectedOption === idx 
                    ? 'border-gold bg-gold/10 text-white' 
                    : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-500'
                }`}
              >
                <span className="text-sm">{option}</span>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  selectedOption === idx ? 'border-gold bg-gold' : 'border-slate-600'
                }`}>
                  {selectedOption === idx && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </div>
              </button>
            ))}
          </div>

          <button
            disabled={selectedOption === null || isSubmitted}
            onClick={handleSubmit}
            className={`w-full py-4 rounded-xl font-mono font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
              isSubmitted 
                ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                : error 
                  ? 'bg-red-500 text-white animate-shake'
                  : selectedOption !== null 
                    ? 'bg-gold text-slate-950 shadow-[0_0_20px_rgba(255,183,3,0.3)] hover:scale-[1.02]' 
                    : 'bg-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            {isSubmitted ? (
              <>
                <CheckCircle2 size={18} />
                Access Granted
              </>
            ) : error ? (
              <>
                <AlertCircle size={18} />
                Verification Failed
              </>
            ) : (
              'Verify & Unlock'
            )}
          </button>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, #ffb703 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
      </motion.div>
    </div>
  );
};
