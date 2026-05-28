import { useState, useEffect } from 'react';

export const useProgress = () => {
  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa_completed_tasks');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [unlockedPhases, setUnlockedPhases] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa_unlocked_phases');
      return saved ? JSON.parse(saved) : [1];
    } catch { return [1]; }
  });

  const [unlockedBadges, setUnlockedBadges] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa_unlocked_badges');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('dsa_completed_tasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem('dsa_unlocked_phases', JSON.stringify(unlockedPhases));
  }, [unlockedPhases]);

  useEffect(() => {
    localStorage.setItem('dsa_unlocked_badges', JSON.stringify(unlockedBadges));
  }, [unlockedBadges]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const unlockPhase = (phaseId) => {
    if (!unlockedPhases.includes(phaseId)) {
      setUnlockedPhases(prev => [...prev, phaseId].sort((a, b) => a - b));
    }
  };

  const unlockBadge = (badgeId) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges(prev => [...prev, badgeId]);
    }
  };

  return {
    completedTasks,
    unlockedPhases,
    unlockedBadges,
    toggleTask,
    unlockPhase,
    unlockBadge
  };
};
