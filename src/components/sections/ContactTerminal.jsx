import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ContactTerminal() {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS integration stub - User will configure later
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 lg:px-16 flex flex-col justify-center border-t border-bg-card-hover/50 relative">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent-pink font-mono text-2xl mr-4">06.</span>
            Contact <span className="text-gradient">Terminal</span>
          </h2>
          <p className="text-text-muted font-mono">Establish a secure connection...</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0A0D14] border border-bg-card-hover rounded-xl overflow-hidden shadow-2xl shadow-accent-pink/10"
        >
          {/* Terminal Header */}
          <div className="bg-[#111623] px-4 py-3 flex items-center gap-2 border-b border-bg-card-hover">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-xs font-mono text-text-muted">shibin@portfolio: ~/contact</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono">
            <div className="mb-8 text-text-muted text-sm space-y-1">
              <p className="text-accent-cyan">System initialized.</p>
              <p>Type your message below to start communication protocol.</p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center group">
                <label className="text-accent-cyan whitespace-nowrap">
                  <span className="text-accent-pink">shibin</span>@portfolio:~$ <span className="text-text-main group-hover:text-accent-cyan transition-colors">Enter Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-b border-bg-card-hover border-dashed focus:border-accent-cyan outline-none text-text-main py-1 px-2 transition-colors"
                  placeholder="_"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:items-center group">
                <label className="text-accent-cyan whitespace-nowrap">
                  <span className="text-accent-pink">shibin</span>@portfolio:~$ <span className="text-text-main group-hover:text-accent-cyan transition-colors">Enter Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-b border-bg-card-hover border-dashed focus:border-accent-cyan outline-none text-text-main py-1 px-2 transition-colors"
                  placeholder="_"
                />
              </div>

              <div className="flex flex-col gap-2 group">
                <label className="text-accent-cyan whitespace-nowrap">
                  <span className="text-accent-pink">shibin</span>@portfolio:~$ <span className="text-text-main group-hover:text-accent-cyan transition-colors">Enter Message</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-bg-card-hover border-dashed focus:border-accent-cyan outline-none text-text-main p-4 transition-colors rounded resize-none focus:bg-accent-cyan/5"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm w-full sm:w-auto text-left">
                  {status === 'sending' && <span className="text-accent-cyan animate-pulse">Transmitting data packages...</span>}
                  {status === 'success' && <span className="text-green-400">Message successfully delivered!</span>}
                  {status === 'error' && <span className="text-red-400">Transmission failed. Try again.</span>}
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-6 py-3 bg-accent-pink/10 border border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white transition-all rounded shadow-[0_0_15px_-5px_#FF0080] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {status === 'sending' ? 'EXECUTING...' : 'SEND_MESSAGE()'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
