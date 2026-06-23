import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const experiences = [
    {
      year: "2026",
      title: "Seeking Software Opportunities",
      description: "Actively looking for full-time roles as a Full Stack Developer or Backend Engineer to build scalable and impactful applications.",
      icon: "🚀",
      active: true
    },
    {
      year: "2025",
      title: "Freelance Web Development",
      description: "Built and deployed custom web applications for clients, focusing on responsive design and performance optimization using React and Tailwind CSS.",
      icon: "💻",
      active: false
    },
    {
      year: "2025",
      title: "Java Full Stack Training",
      description: "Completed intensive training covering Java, Spring Boot, microservices architecture, and React frontend development.",
      icon: "🎓",
      active: false
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 lg:px-16 flex flex-col justify-center border-t border-bg-card-hover/50 relative">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
            <span className="text-accent-cyan font-mono text-2xl mr-4">04.</span>
            Experience <span className="text-gradient ml-3">Timeline</span>
          </h2>
          <p className="text-text-muted font-mono bg-bg-card border border-bg-card-hover inline-block px-4 py-1 rounded-md">
            &gt; Parsing historical records...
          </p>
        </motion.div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent-cyan before:via-accent-purple before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-base bg-bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10 transition-colors ${exp.active ? 'border-accent-cyan shadow-[0_0_15px_#00F5FF]' : 'border-bg-card-hover group-hover:border-accent-purple'}`}>
                <span className="text-xl">{exp.icon}</span>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-bg-card border border-bg-card-hover p-6 rounded-2xl group-hover:border-accent-purple transition-colors hover:shadow-[0_0_30px_-5px_#7C3AED]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-text-main">{exp.title}</h3>
                  <span className={`font-mono text-sm px-3 py-1 rounded-full ${exp.active ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30' : 'bg-bg-base text-text-muted border border-bg-card-hover'}`}>
                    {exp.year}
                  </span>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
