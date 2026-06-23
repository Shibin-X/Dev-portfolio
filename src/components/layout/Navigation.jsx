import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiHome, HiCode, HiChip, HiDocumentText, HiMail } from 'react-icons/hi';

export default function Navigation() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: HiHome },
    { id: 'about', label: 'About', icon: HiChip },
    { id: 'projects', label: 'Projects', icon: HiCode },
    { id: 'resume', label: 'Resume', icon: HiDocumentText },
    { id: 'contact', label: 'Contact', icon: HiMail },
  ];

  const scrollTo = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden md:flex fixed top-0 left-0 right-0 h-20 z-50 px-8 lg:px-16 items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-bg-base/80 backdrop-blur-md border-b border-bg-card-hover/50 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="text-xl font-bold font-sans tracking-widest text-text-main flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <span className="text-accent-cyan">&lt;</span>
          DEV
          <span className="text-accent-pink">/&gt;</span>
        </div>
        
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm tracking-wider uppercase transition-colors relative font-medium ${
                active === item.id ? 'text-accent-cyan' : 'text-text-muted hover:text-text-main'
              }`}
            >
              {item.label}
              {active === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent-cyan shadow-[0_0_8px_#00F5FF]"
                />
              )}
            </button>
          ))}
          <div className="hidden lg:flex items-center text-xs text-text-muted bg-bg-card/50 px-3 py-1.5 rounded border border-bg-card-hover font-mono">
            Press <kbd className="mx-1 text-accent-cyan font-bold">Ctrl+K</kbd>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-bg-card/90 backdrop-blur-xl border-t border-bg-card-hover z-50 px-4 py-3 flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center gap-1 transition-colors relative w-16 ${
                isActive ? 'text-accent-cyan' : 'text-text-muted hover:text-text-main'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-bg"
                  className="absolute inset-0 bg-accent-cyan/10 rounded-xl -z-10"
                />
              )}
              <div className="p-1.5">
                <Icon size={22} />
              </div>
              <span className="text-[9px] uppercase tracking-wider font-semibold">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
