import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Target, Trophy } from 'lucide-react';

export const LiquidMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative md:hidden z-50">
      {/* SVG Filter for the Liquid/Gooey effect */}
      <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div style={{ filter: 'url(#goo)' }} className="relative flex items-center justify-center w-16 h-16">
        
        {/* Menu Items (Reveal outwards) */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.button 
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, y: 70, scale: 1 }}
                exit={{ opacity: 0, y: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute bg-cyan text-slate-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              >
                <Terminal size={20} />
              </motion.button>

              <motion.button 
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, x: -60, y: 40, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.05 }}
                className="absolute bg-cyan text-slate-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              >
                <Target size={20} />
              </motion.button>

              <motion.button 
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, x: -70, y: -20, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className="absolute bg-cyan text-slate-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              >
                <Trophy size={20} />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Main Hamburger Button */}
        <motion.button 
          onClick={toggleMenu}
          whileTap={{ scale: 0.8 }}
          className="absolute bg-cyan text-slate-950 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] z-10"
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </motion.button>

      </div>
    </div>
  );
};
