import { motion } from 'framer-motion';
import { FiUser, FiCode, FiTarget, FiBriefcase } from 'react-icons/fi';

export default function AboutDashboard() {
  const cards = [
    {
      title: "Profile",
      icon: FiUser,
      delay: 0.1,
      content: (
        <div className="space-y-4">
          <p className="text-text-muted leading-relaxed">
            <strong className="text-text-main font-mono mr-2">NAME:</strong> Developer<br/>
            <strong className="text-text-main font-mono mr-2">ROLE:</strong> Full Stack Engineer<br/>
            <strong className="text-text-main font-mono mr-2">LOC:</strong> Global<br/>
            <strong className="text-text-main font-mono mr-2">MAIL:</strong> hello@example.com
          </p>
          <div className="pt-4 border-t border-bg-card-hover">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              STATUS: Available for opportunities
            </span>
          </div>
        </div>
      )
    },
    {
      title: "Core Expertise",
      icon: FiCode,
      delay: 0.2,
      content: (
        <div className="flex flex-wrap gap-2">
          {['Java', 'Spring Boot', 'React', 'JavaScript', 'MongoDB', 'Tailwind CSS'].map(skill => (
            <span key={skill} className="px-3 py-1.5 bg-bg-base border border-bg-card-hover rounded-md text-sm text-text-muted font-mono hover:border-accent-purple hover:text-accent-purple hover:shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      )
    },
    {
      title: "Career Objective",
      icon: FiTarget,
      delay: 0.3,
      content: (
        <p className="text-text-muted leading-relaxed">
          To architect scalable, efficient, and visually stunning web applications that solve complex real-world problems. Passionate about continuous learning and bridging the gap between robust backend logic and premium frontend aesthetics.
        </p>
      )
    },
    {
      title: "Current Directives",
      icon: FiBriefcase,
      delay: 0.4,
      content: (
        <ul className="space-y-3 text-text-muted font-mono text-sm">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F5FF] animate-pulse" />
            Mastering Microservices Architecture
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_#7C3AED] animate-pulse" style={{animationDelay: '0.5s'}} />
            Advanced React & Next.js Patterns
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-pink shadow-[0_0_8px_#FF0080] animate-pulse" style={{animationDelay: '1s'}} />
            Open Source Contributions
          </li>
        </ul>
      )
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 lg:px-16 flex flex-col justify-center relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent-cyan font-mono text-2xl mr-4">01.</span>
            System <span className="text-gradient">Diagnostics</span>
          </h2>
          <p className="text-text-muted font-mono bg-bg-card border border-bg-card-hover inline-block px-4 py-1 rounded-md">
            &gt; Initializing profile data modules...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="group relative bg-bg-card border border-bg-card-hover rounded-2xl p-8 overflow-hidden hover:border-accent-cyan/50 transition-colors"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl z-0" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-bg-base rounded-xl border border-bg-card-hover group-hover:border-accent-cyan transition-colors group-hover:text-accent-cyan group-hover:shadow-[0_0_15px_#00F5FF]">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-sans tracking-wide">{card.title}</h3>
                  </div>
                  {card.content}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
