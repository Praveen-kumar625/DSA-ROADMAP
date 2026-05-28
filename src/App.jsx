import React, { useState, useEffect } from 'react';
import { roadmapData } from './data';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { Sidebar } from './components/Sidebar';
import { PhaseCard } from './components/PhaseCard';
import { CheatSheetTerminal } from './components/CheatSheetTerminal';
import { ProgressTracker } from './components/ProgressTracker';
import { QuizModal } from './components/QuizModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('dsa_completed_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [unlockedPhases, setUnlockedPhases] = useState(() => {
    const saved = localStorage.getItem('dsa_unlocked_phases');
    return saved ? JSON.parse(saved) : [1];
  });

  const [unlockedBadges, setUnlockedBadges] = useState(() => {
    const saved = localStorage.getItem('dsa_unlocked_badges');
    return saved ? JSON.parse(saved) : [];
  });

  const [expandedPhase, setExpandedPhase] = useState(1);
  const [quizPhase, setQuizPhase] = useState(null);

  useEffect(() => {
    localStorage.setItem('dsa_completed_tasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem('dsa_unlocked_phases', JSON.stringify(unlockedPhases));
  }, [unlockedPhases]);

  useEffect(() => {
    localStorage.setItem('dsa_unlocked_badges', JSON.stringify(unlockedBadges));
  }, [unlockedBadges]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === 'S') {
        alert("SECURE TRANSMISSION: Consistency is the only secret weapon. Keep grinding, Agent!");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const totalTasks = roadmapData.phases.reduce((acc, phase) => acc + phase.days.length, 0);
  const progress = Math.round((completedTasks.length / totalTasks) * 100);

  const handleTaskToggle = (taskId) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const handlePassQuiz = () => {
    if (quizPhase) {
      const nextPhaseId = quizPhase.id + 1;
      if (nextPhaseId <= roadmapData.phases.length && !unlockedPhases.includes(nextPhaseId)) {
        setUnlockedPhases(prev => [...prev, nextPhaseId]);
        setExpandedPhase(nextPhaseId);
      }
      
      // Unlock badge for the phase just completed
      const badgeId = `b${quizPhase.id}`;
      if (!unlockedBadges.includes(badgeId)) {
        setUnlockedBadges(prev => [...prev, badgeId]);
      }
    }
  };

  return (
    <Layout 
      progress={progress} 
      currentPhase={unlockedPhases[unlockedPhases.length - 1]}
      badgesCount={unlockedBadges.length}
    >
      {/* 1. Hero Area */}
      <HeroSection quote={roadmapData.phases[expandedPhase - 1]?.quote || roadmapData.phases[0].quote} />

      {/* 2. Left Sidebar (Progress & Badges) */}
      <Sidebar 
        unlockedPhases={unlockedPhases} 
        progress={progress} 
        unlockedBadges={unlockedBadges}
      />

      {/* 3. Main Center Content (Roadmap) */}
      <div className="lg:col-span-6 space-y-6">
        {roadmapData.phases.map((phase) => (
          <PhaseCard 
            key={phase.id}
            phase={phase}
            isLocked={!unlockedPhases.includes(phase.id)}
            isExpanded={expandedPhase === phase.id}
            onToggle={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
            completedTasks={completedTasks}
            onTaskToggle={handleTaskToggle}
            onStartQuiz={() => setQuizPhase(phase)}
          />
        ))}
      </div>

      {/* 4. Right Panel (Tracker & Cheatsheet) */}
      <div className="lg:col-span-3 space-y-8">
        <ProgressTracker />
        <CheatSheetTerminal snippets={roadmapData.cheatsheet} />
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {quizPhase && (
          <QuizModal 
            phase={quizPhase} 
            isOpen={!!quizPhase} 
            onClose={() => setQuizPhase(null)}
            onPass={handlePassQuiz}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
