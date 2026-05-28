import React from 'react';
import { roadmapData } from '../data';

export const ProgressTracker = () => {
  return (
    <div className="glass rounded-xl overflow-hidden border border-slate-700/50">
      <div className="bg-slate-800/50 p-4 border-b border-slate-700/50">
        <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">Weekly Momentum Tracker</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-[10px]">
          <thead>
            <tr className="border-b border-slate-700/50 text-slate-500 uppercase tracking-widest">
              <th className="px-4 py-3 font-normal">WK</th>
              <th className="px-4 py-3 font-normal">Phase Focus</th>
              <th className="px-4 py-3 font-normal text-right">Target</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {roadmapData.weeklyTracker.slice(0, 12).map((item, idx) => (
              <tr key={idx} className="hover:bg-cyan/5 transition-colors group">
                <td className="px-4 py-2 text-cyan group-hover:text-white">{item.week}</td>
                <td className="px-4 py-2 text-slate-400 group-hover:text-slate-200">{item.topics}</td>
                <td className="px-4 py-2 text-right text-slate-500">{item.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 bg-slate-900/30 text-center">
        <button className="text-[9px] text-cyan uppercase tracking-widest hover:text-white transition-colors">
          View Extended Log
        </button>
      </div>
    </div>
  );
};
