import React, { useState, useEffect } from 'react';
import { roadmapData } from './data';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { Sidebar } from './components/Sidebar';
import { PhaseCard } from './components/PhaseCard';
import { CheatSheetTerminal } from './components/CheatSheetTerminal';
import { ProgressTracker } from './components/ProgressTracker';
import { QuizModal } from './components/QuizModal';
import { ResourcesVault } from './components/ResourcesVault';
import { AnimatePresence } from 'framer-motion';
import { useProgress } from './hooks/useProgress';

function App() {
  const { completedTasks, unlockedPhases, unlockedBadges, toggleTask, unlockPhase, unlockBadge } = useProgress();

  const [expandedPhase, setExpandedPhase] = useState(1);
  const [quizPhase, setQuizPhase] = useState(null);

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

  const handlePassQuiz = () => {
    if (quizPhase) {
      const nextPhaseId = quizPhase.id + 1;
      if (nextPhaseId <= roadmapData.phases.length) {
        unlockPhase(nextPhaseId);
        setExpandedPhase(nextPhaseId);
      }
      
      // Unlock badge for the phase just completed
      unlockBadge(`b${quizPhase.id}`);
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
            onTaskToggle={toggleTask}
            onStartQuiz={() => setQuizPhase(phase)}
          />
        ))}
      </div>

      {/* 4. Right Panel (Tracker, Cheatsheet & Resources) */}
      <div className="lg:col-span-3 space-y-8">
        <ProgressTracker />
        <CheatSheetTerminal snippets={roadmapData.cheatsheet} />
        <ResourcesVault resources={roadmapData.resources} prerequisites={roadmapData.prerequisites} />
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
