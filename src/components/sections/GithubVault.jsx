import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiDownload, FiStar, FiGitBranch } from 'react-icons/fi';

export default function GithubVault() {
  const [stats, setStats] = useState({ repos: 0, followers: 0, following: 0 });
  const [topRepos, setTopRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const username = "Shibin-X";

  const fetchGithubData = async () => {
    try {
      setLoading(true);

      // Fetch profile
      const profileResponse = await fetch(
        `https://api.github.com/users/${username}`
      );

      const profile = await profileResponse.json();

      // Fetch repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      );

      const repos = await reposResponse.json();

      // Sort repositories by stars
      const topRepositories = repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

      setStats({
        repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
      });

      setTopRepos(topRepositories);

      setLoading(false);
    } catch (error) {
      console.error("GitHub API Error:", error);
      setLoading(false);
    }
  };

  fetchGithubData();
}, []);

  return (
    <section id="resume" className="min-h-screen py-20 px-6 lg:px-16 flex flex-col justify-center border-t border-bg-card-hover/50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
            <span className="text-accent-purple font-mono text-2xl mr-4">05.</span>
            GitHub Analytics & <span className="text-gradient ml-3">Resume Vault</span>
          </h2>
          <p className="text-text-muted font-mono bg-bg-card border border-bg-card-hover inline-block px-4 py-1 rounded-md">
            &gt; Fetching repository stats...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* GitHub Stats Grid */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Repositories", value: stats.repos },
                { label: "Followers", value: stats.followers },
                { label: "Following", value: stats.following }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-bg-card border border-bg-card-hover rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-accent-purple transition-colors"
                >
                  <div className="absolute inset-0 bg-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-3xl font-bold text-text-main mb-2 relative z-10">{loading ? '...' : stat.value}</span>
                  <span className="text-sm font-mono text-text-muted uppercase tracking-wider relative z-10">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-bg-card border border-bg-card-hover rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FiGithub className="text-accent-purple" /> Top Repositories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loading ? (
                  <div className="col-span-2 text-center py-8 text-text-muted font-mono animate-pulse">Loading repos...</div>
                ) : (
                  topRepos.map((repo, i) => (
                    <div key={i} className="bg-bg-base border border-bg-card-hover rounded-lg p-4 hover:border-text-muted transition-colors">
                      <h4 className="font-bold text-text-main mb-2">{repo.name}</h4>
                      <div className="flex items-center justify-between text-sm text-text-muted font-mono">
                        <span className="text-accent-cyan">{repo.language}</span>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1"><FiStar /> {repo.stars}</span>
                          <span className="flex items-center gap-1"><FiGitBranch /> {repo.forks}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Resume Vault Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-bg-card border border-bg-card-hover rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-accent-cyan transition-colors hover:shadow-[0_0_40px_-10px_#00F5FF]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-cyan/10 via-bg-card to-bg-card z-0" />

              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="w-20 h-20 bg-bg-base border border-bg-card-hover rounded-full flex items-center justify-center mb-6 group-hover:border-accent-cyan group-hover:scale-110 transition-all duration-300">
                  <FiDownload className="text-3xl text-text-muted group-hover:text-accent-cyan transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-2">Resume.pdf</h3>
                <p className="text-sm font-mono text-text-muted mb-8">Last Updated: Today</p>
                <a
                  href="/resume/Shibin_Resume.pdf"
                  download
                  className="relative inline-flex px-6 py-4 bg-transparent overflow-hidden rounded-lg font-bold border border-accent-cyan text-accent-cyan transition-all hover:text-bg-base group/btn w-full items-center justify-center gap-2 text-sm md:text-base"
                >
                  <span className="absolute inset-0 bg-accent-cyan w-0 group-hover/btn:w-full transition-all duration-300 ease-out z-0"></span>

                  <span className="relative z-10 flex items-center gap-2">
                    DECRYPT & DOWNLOAD
                    <FiDownload className="group-hover/btn:-translate-y-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
