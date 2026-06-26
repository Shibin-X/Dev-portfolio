import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`relative rounded-2xl bg-bg-card border border-bg-card-hover group ${className}`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,245,255,0.05) 0%, transparent 60%)"
        }}
      />
      <div className="relative z-10 h-full w-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default function ProjectsCenter() {
  const featuredProject = {
    title: "E-Commerce Platform",
    description: "A full-scale e-commerce solution featuring secure authentication, product management, and seamless checkout flow.",
    features: ["Authentication", "JWT Security", "Shopping Cart", "Admin Panel"],
    tech: ["React", "Spring Boot", "MongoDB", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/Shibin-X/E-commerce-ShopHub",
    live: "#"
  };

  const otherProjects = [
    {
      title: "Expense Tracker Dashboard",
      description:
        "A responsive expense management dashboard that helps users track income, expenses, and financial summaries through interactive charts and a modern user interface.",
      tech: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Chart.js"
      ],
      github: "https://github.com/Shibin-X/finance-dashboard",
      live: "xpensofin.netlify.app"
    },
    {
      title: "Manatomy Clothing Store",
      description:
        "A modern fashion e-commerce website featuring responsive design, product catalog, category browsing, and an optimized shopping experience.",
      tech: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design"
      ],
      github: "https://github.com/Shibin-X/Clothing-Project",
      live: "manatomy.netlify.app"
    },
    {
      title: "Task Management API",
      description: "RESTful backend service for managing tasks, teams, and project boards with real-time updates.",
      tech: ["Node.js", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Terminal",
      description: "An interactive command-line style portfolio built to showcase frontend architecture skills.",
      tech: ["React", "Framer Motion", "Vite"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 lg:px-16 flex flex-col justify-center border-t border-bg-card-hover/50 relative perspective-[1000px]">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
            <span className="text-accent-pink font-mono text-2xl mr-4">03.</span>
            Project <span className="text-gradient ml-3">Command Center</span>
          </h2>
          <p className="text-text-muted font-mono bg-bg-card border border-bg-card-hover inline-block px-4 py-1 rounded-md">
            &gt; Accessing deployment records...
          </p>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-12">
          <TiltCard className="p-8 md:p-12 border-accent-cyan/20 hover:border-accent-cyan hover:shadow-[0_0_40px_-10px_#00F5FF]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded text-accent-cyan font-mono text-xs tracking-widest uppercase">
                  Featured Deployment
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-text-main">{featuredProject.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{featuredProject.description}</p>

                <div>
                  <h4 className="text-sm font-mono text-text-muted mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {featuredProject.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-main">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_5px_#00F5FF]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-text-muted mb-3 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-bg-base border border-bg-card-hover rounded text-xs font-mono text-accent-purple hover:border-accent-purple transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <a href={featuredProject.github} className="flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors font-mono">
                    <FiGithub size={20} /> Repository
                  </a>
                  <a href={featuredProject.live} className="flex items-center gap-2 text-text-muted hover:text-accent-pink transition-colors font-mono">
                    <FiExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] bg-bg-base rounded-xl border border-bg-card-hover overflow-hidden group/img shadow-xl">
                <div className="absolute inset-0 flex flex-col">
                  {/* Fake Browser Chrome */}
                  <div className="h-8 bg-bg-card border-b border-bg-card-hover flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <div className="ml-4 px-4 py-0.5 bg-bg-base border border-bg-card-hover rounded text-[10px] font-mono text-text-muted w-1/2 overflow-hidden whitespace-nowrap">
                      https://ecommerce-platform.live
                    </div>
                  </div>
                  {/* Fake UI Content */}
                  <div className="flex-1 p-6 relative overflow-hidden bg-gradient-to-br from-bg-base to-bg-card">
                    <div className="w-full h-32 bg-bg-card-hover/50 rounded-lg mb-4 animate-pulse" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-bg-card-hover/50 rounded-lg animate-pulse" />
                      <div className="h-24 bg-bg-card-hover/50 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="h-24 bg-bg-card-hover/50 rounded-lg animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <TiltCard className="p-8 h-full flex flex-col hover:border-accent-purple hover:shadow-[0_0_30px_-5px_#7C3AED]">
                <div className="flex justify-between items-start mb-6">
                  <FiFolder className="text-4xl text-accent-purple drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
                  <div className="flex gap-4">
                    <a href={project.github} className="text-text-muted hover:text-text-main transition-colors"><FiGithub size={20} /></a>
                    <a href={project.live} className="text-text-muted hover:text-text-main transition-colors"><FiExternalLink size={20} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-purple transition-colors text-text-main">{project.title}</h3>
                <p className="text-text-muted mb-6 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-text-muted group-hover:text-accent-cyan transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
