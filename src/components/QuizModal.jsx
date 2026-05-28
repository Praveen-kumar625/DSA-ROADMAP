import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, CheckCircle2, AlertCircle, Terminal } from 'lucide-react';

export const QuizModal = ({ phase, isOpen, onClose, onPass }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsCompleted] = useState(false);
  const [error, setError] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setIsCompleted(false);
      setError(false);
      setQuizFinished(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentQuestion = phase.quiz[currentQuestionIndex];

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setIsCompleted(true);
      setTimeout(() => {
        if (currentQuestionIndex < phase.quiz.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
          setIsCompleted(false);
        } else {
          setQuizFinished(true);
          setTimeout(() => {
            onPass();
            onClose();
          }, 2000);
        }
      }, 1000);
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
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative glass w-full max-w-lg rounded-2xl border-gold/30 overflow-hidden shadow-[0_0_50px_rgba(255,183,3,0.15)]"
      >
        <div className="bg-gold/10 p-6 flex items-center justify-between border-b border-gold/20">
          <div className="flex items-center gap-3 text-gold font-mono uppercase tracking-[0.2em]">
            <ShieldAlert size={20} />
            Boss Fight - Level {currentQuestionIndex + 1}/{phase.quiz.length}
          </div>
          {!quizFinished && (
            <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          )}
        </div>

        <div className="p-8 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {!quizFinished ? (
              <motion.div 
                key={currentQuestionIndex}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Requirement: Verify Knowledge</span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {currentQuestion.question}
                  </h3>
                </div>

                <div className="space-y-3 mb-8">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedOption(idx)}
                      disabled={isSubmitted || error}
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
                      Target Acquired
                    </>
                  ) : error ? (
                    <>
                      <AlertCircle size={18} />
                      Verification Failed
                    </>
                  ) : (
                    'Verify & Proceed'
                  )}
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="finished"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <Terminal size={40} className="text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Clearance Granted</h2>
                <p className="text-slate-400 font-mono text-sm">System restrictions lifted for Phase {phase.id + 1}</p>
                <div className="mt-8 flex justify-center gap-2">
                  {[0,1,2].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, delay: i * 0.2, repeat: Infinity }}
                      className="w-2 h-6 bg-cyan"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, #ffb703 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
      </motion.div>
    </div>
  );
};
