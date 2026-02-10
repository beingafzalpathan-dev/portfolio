import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SECTIONS } from '../../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollAnimation();

  const navItems = [
    { name: 'Home', href: `#${SECTIONS.HOME}` },
    { name: 'About', href: `#${SECTIONS.ABOUT}` },
    { name: 'Skills', href: `#${SECTIONS.SKILLS}` },
    { name: 'Projects', href: `#${SECTIONS.PROJECTS}` },
    { name: 'Experience', href: `#${SECTIONS.EXPERIENCE}` },
    { name: 'Contact', href: `#${SECTIONS.CONTACT}` }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div className="text-2xl font-bold gradient-text" whileHover={{ scale: 1.05 }}>
            AJ
          </motion.div>

          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden glass"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;