import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiMail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative w-full py-16 sm:py-20 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12"
        >
          {/* Brand section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-acm-blue to-acm-cyan rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-bold text-white">ACM</span>
            </div>
            <p className="text-sm text-white/60">
              Association for Computing Machinery - Amrita Vishwa Vidyapeetham
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'SIGs', 'Events'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-acm-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'Blog', 'Community', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-acm-cyan transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, color: '#00A9F4' }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-acm-blue/20 flex items-center justify-center text-white/60 hover:text-acm-blue transition-all"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-acm-blue/30 to-transparent mb-8"
        />

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-white/50 text-center sm:text-left">
            © 2024 ACM Student Chapter, Amrita Vishwa Vidyapeetham. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Designed & Built with ❤️ by ACM Community
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
