import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (e) => {
      const { title, description } = e.detail;
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description }]);
      
      // Auto-remove after 4 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    };

    window.addEventListener('acm-toast', handleToast);
    return () => window.removeEventListener('acm-toast', handleToast);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 w-full max-w-[380px] pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl border border-cyan-400/25 bg-[#050d22]/90 backdrop-blur-md shadow-2xl shadow-cyan-500/10 text-white"
          >
            <div className="flex-1">
              {t.title && <div className="font-display text-lg text-cyan-300">{t.title}</div>}
              {t.description && <div className="text-sm text-white/70 mt-0.5 leading-relaxed">{t.description}</div>}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-white/40 hover:text-white transition-colors p-1"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
