import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import AboutDashboard from './components/sections/AboutDashboard';
import SkillsArsenal from './components/sections/SkillsArsenal';
import ProjectsCenter from './components/sections/ProjectsCenter';
import ExperienceTimeline from './components/sections/ExperienceTimeline';
import GithubVault from './components/sections/GithubVault';
import ContactTerminal from './components/sections/ContactTerminal';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutDashboard />
      <SkillsArsenal />
      <ProjectsCenter />
      <ExperienceTimeline />
      <GithubVault />
      <ContactTerminal />
      
      {/* Footer */}
      <footer className="py-8 text-center text-text-muted font-mono text-sm border-t border-bg-card-hover/50 bg-bg-base relative z-10">
        <p>&copy; {new Date().getFullYear()} Shibin. All systems operational.</p>
        <p className="mt-2 opacity-50 text-xs">Built with React, Vite & Tailwind v4</p>
      </footer>
    </Layout>
  );
}

export default App;
