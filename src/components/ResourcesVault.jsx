import React from 'react';
import { motion } from 'framer-motion';
import { Video, ExternalLink, PlayCircle } from 'lucide-react';

export const ResourcesVault = ({ resources, prerequisites }) => {
  return (
    <div className="glass rounded-xl overflow-hidden border border-slate-700/50 flex flex-col">
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
        <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
          <Video size={14} className="text-red-500" />
          Intelligence_Sources
        </h3>
      </div>
      
      <div className="p-4 space-y-6 max-h-[400px] overflow-y-auto no-scrollbar">
        {/* Primary Target */}
        <div>
          <h4 className="text-[10px] font-mono text-cyan uppercase tracking-widest mb-3 border-b border-cyan/20 pb-1">Primary Target</h4>
          {resources.filter(r => r.type === 'primary').map((res, idx) => (
            <a 
              key={idx} 
              href={res.url} 
              target="_blank" 
              rel="noreferrer"
              className="block glass bg-cyan/5 p-3 rounded-lg border border-cyan/20 hover:bg-cyan/10 transition-colors group"
            >
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-sm font-bold text-white group-hover:text-cyan transition-colors">{res.title}</h5>
                <PlayCircle size={14} className="text-cyan opacity-50 group-hover:opacity-100" />
              </div>
              <p className="text-xs text-slate-400 mb-2">{res.desc}</p>
              <div className="flex gap-2">
                <span className="text-[9px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">{res.lang}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Prerequisites */}
        <div>
          <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-700 pb-1">Language Prerequisites</h4>
          <div className="flex flex-wrap gap-2">
            {prerequisites.map((req, idx) => (
              <a 
                key={idx}
                href={req.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700 text-[10px] font-mono hover:border-slate-500 text-slate-300 transition-colors"
              >
                <PlayCircle size={10} className="text-red-400" />
                {req.title}
              </a>
            ))}
          </div>
        </div>

        {/* Alternatives */}
        <div>
          <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-700 pb-1">Alternative Sources</h4>
          <div className="space-y-2">
            {resources.filter(r => r.type === 'alternative').map((res, idx) => (
              <a 
                key={idx} 
                href={res.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700 group"
              >
                <div className="flex flex-col">
                  <span className="text-xs text-slate-300 group-hover:text-white font-medium">{res.title}</span>
                  <span className="text-[9px] text-slate-500 font-mono">{res.lang} • {res.desc}</span>
                </div>
                <ExternalLink size={12} className="text-slate-600 group-hover:text-cyan" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
