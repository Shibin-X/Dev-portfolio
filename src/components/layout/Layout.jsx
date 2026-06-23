import CustomCursor from './CustomCursor';
import SocialDock from './SocialDock';
import Navigation from './Navigation';
import CommandPalette from './CommandPalette';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-bg-base text-text-main font-sans selection:bg-accent-purple/30 selection:text-text-main overflow-x-hidden">
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navigation />
      <SocialDock />
      <CommandPalette />

      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
