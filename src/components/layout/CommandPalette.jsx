import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Dashboard' },
    { id: 'skills', label: 'Skills Arsenal' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience Timeline' },
    { id: 'resume', label: 'Resume Vault' },
    { id: 'contact', label: 'Contact Terminal' },
  ];

  const filtered = sections.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id) => {
    setIsOpen(false);
    setQuery('');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-base/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="relative w-full max-w-lg bg-bg-card border border-bg-card-hover rounded-2xl shadow-2xl shadow-accent-cyan/10 overflow-hidden"
          >
            <div className="flex items-center px-4 py-4 border-b border-bg-card-hover">
              <FiSearch className="text-text-muted mr-3" size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Search sections... (Type to filter)"
                className="w-full bg-transparent text-text-main outline-none placeholder:text-text-muted font-mono"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="text-xs text-text-muted border border-bg-card-hover rounded px-2 py-1 ml-2 font-mono">ESC</div>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-text-muted hover:bg-accent-cyan/10 hover:text-accent-cyan transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan font-mono text-sm">Jump →</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="px-4 py-8 text-center text-text-muted font-mono">No matching sections found.</div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
