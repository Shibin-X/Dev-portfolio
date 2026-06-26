import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

export default function SocialDock() {
  const links = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/shibin-g', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/Shibin-X', label: 'GitHub' },
    { icon: FaEnvelope, url: '', label: 'Email' },
    { icon: FiLink, url: '#', label: 'Topmate' },
  ];

  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-50 items-center">
      <div className="w-[1px] h-24 bg-gradient-to-t from-accent-cyan to-transparent mb-4" />
      {links.map((link, i) => {
        const Icon = link.icon;
        return (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-all hover:scale-125 transform duration-300 hover:shadow-[0_0_15px_#00F5FF] rounded-full p-2 bg-bg-card/50 backdrop-blur"
            title={link.label}
          >
            <Icon size={22} />
          </a>
        );
      })}
      <div className="w-[1px] h-24 bg-gradient-to-b from-accent-cyan to-transparent mt-4" />
    </div>
  );
}
