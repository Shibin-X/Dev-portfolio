import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaReact, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiMongodb } from 'react-icons/si';

export default function Hero() {
  const floatingIcons = [
    { Icon: FaReact, color: '#00D8FF', left: '10%', top: '20%', delay: 0 },
    { Icon: FaJava, color: '#f89820', left: '80%', top: '15%', delay: 1 },
    { Icon: SiSpringboot, color: '#6db33f', left: '70%', top: '70%', delay: 2 },
    { Icon: FaNodeJs, color: '#339933', left: '20%', top: '80%', delay: 1.5 },
    { Icon: SiTailwindcss, color: '#38bdf8', left: '85%', top: '45%', delay: 0.5 },
    { Icon: SiMongodb, color: '#47A248', left: '15%', top: '50%', delay: 2.5 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 px-6 lg:px-16">
      {/* Particle Background - Simple CSS based floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent-cyan/20 blur-[2px]"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Floating Tech Logos */}
      {floatingIcons.map((item, i) => {
        const { Icon, color, left, top, delay } = item;
        return (
          <motion.div
            key={i}
            className="absolute z-0 opacity-20 pointer-events-none"
            style={{ left, top, color }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
          >
            <Icon size={40} />
          </motion.div>
        );
      })}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 flex-1 py-12">

        {/* Left Side: Content */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan font-mono text-sm tracking-wide"
          >
            System Status: ONLINE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-sans tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-gradient">Shibin G</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-text-muted font-medium"
          >
            Java Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-text-muted max-w-lg leading-relaxed"
          >
            Architecting robust backend systems and crafting immersive digital experiences. Transforming complex problems into elegant, scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4"
          >
            <a
              href="/resume/Shibin_Resume.pdf"
              download
              className="group relative inline-flex px-8 py-4 bg-transparent overflow-hidden rounded-lg font-bold text-lg border border-accent-cyan text-accent-cyan transition-all hover:text-bg-base hover:shadow-[0_0_20px_#00F5FF]"
            >
              <span className="absolute inset-0 bg-accent-cyan w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></span>

              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <FiDownload className="group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full aspect-square max-w-md mx-auto hidden lg:block"
        >
          {/* Glowing orb background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/20 rounded-full blur-3xl mix-blend-screen" />

          {/* Abstract geometric shapes or placeholder for illustration */}
          <div className="relative w-full h-full border border-bg-card-hover rounded-3xl bg-bg-card/40 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border-2 border-dashed border-accent-cyan/50 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-2 border-accent-purple/50 rounded-lg flex items-center justify-center bg-bg-card"
              >
                <span className="font-mono text-accent-pink text-xs tracking-widest">&lt;CODE/&gt;</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full max-w-7xl mx-auto mt-auto mb-10 border border-bg-card-hover bg-bg-card/60 backdrop-blur-md rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 z-10 relative shadow-[0_0_30px_-10px_rgba(0,245,255,0.1)]"
      >
        {[
          { label: "Class of", value: "2025" },
          { label: "Role", value: "Java Full Stack" },
          { label: "Stack", value: "React + SpringBoot" },
          { label: "Status", value: "Open To Work", highlight: true }
        ].map((stat, i) => (
          <div key={i} className={`flex flex-col items-center justify-center text-center p-2 border-r border-bg-card-hover last:border-0 ${stat.highlight ? 'text-accent-cyan' : ''}`}>
            <span className="text-xs text-text-muted uppercase tracking-wider mb-1 font-mono">{stat.label}</span>
            <span className={`text-lg font-bold ${stat.highlight ? 'text-accent-cyan drop-shadow-[0_0_8px_#00F5FF]' : 'text-text-main'}`}>{stat.value}</span>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(20px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  );
}
