import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaNetworkWired, FaHeadset } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiMongodb, SiMysql, SiTailwindcss, SiPostman, SiVite, SiGit, SiLinux } from 'react-icons/si';
import { VscDebugConsole } from 'react-icons/vsc';
import { BsFileExcel } from 'react-icons/bs';

export default function SkillsArsenal() {
  const categories = [
    {
      title: "Frontend",
      color: "from-accent-cyan to-blue-500",
      hoverClass: "hover:border-accent-cyan hover:shadow-[0_0_30px_-5px_#00F5FF]",
      skills: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite}
      ]
    },
    {
      title: "Backend",
      color: "from-accent-purple to-purple-500",
      hoverClass: "hover:border-accent-purple hover:shadow-[0_0_30px_-5px_#7C3AED]",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "Node.js", icon: FaNodeJs },
        { name: "REST API", icon: VscDebugConsole },
        { name: "PostMan", icon: SiPostman },
      ]
    },
    {
      title: "Database",
      color: "from-accent-pink to-pink-500",
      hoverClass: "hover:border-accent-pink hover:shadow-[0_0_30px_-5px_#FF0080]",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Excel", icon: BsFileExcel},
      ]
    },
    {
      title: "Support & Tools",
      color: "from-orange-400 to-red-500",
      hoverClass: "hover:border-orange-400 hover:shadow-[0_0_30px_-5px_#fb923c]",
      skills: [
        { name: "Troubleshoot", icon: VscDebugConsole },
        { name: "Networking", icon: FaNetworkWired },
        { name: "Support", icon: FaHeadset },
        { name: "Git", icon: SiGit},
        { name: "Linux", icon: SiLinux}
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 lg:px-16 flex flex-col justify-center border-t border-bg-card-hover/50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent-purple font-mono text-2xl mr-4">02.</span>
            Skills <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-text-muted font-mono bg-bg-card border border-bg-card-hover inline-block px-4 py-1 rounded-md">
            &gt; Loading technical capabilities...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-bg-card border border-bg-card-hover rounded-2xl p-6 transition-all duration-300 ${cat.hoverClass} group relative overflow-hidden`}
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color} shadow-lg`} />
                {cat.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {cat.skills.map((skill, j) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex flex-col items-center gap-3 group/skill cursor-pointer">
                      <div className="w-14 h-14 rounded-xl bg-bg-base border border-bg-card-hover flex items-center justify-center transition-all duration-300 group-hover/skill:border-text-main group-hover/skill:scale-110 group-hover/skill:shadow-lg relative">
                        <Icon size={28} className="text-text-muted group-hover/skill:text-text-main transition-colors relative z-10" />
                        <div className="absolute inset-0 bg-text-main/5 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xs text-center text-text-muted font-mono group-hover/skill:text-text-main transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
