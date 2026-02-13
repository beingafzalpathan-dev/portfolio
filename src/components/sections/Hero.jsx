import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { Button } from '../ui';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { SECTIONS } from '../../constants';

const Hero = () => {
  const { personal, hero, social } = portfolioData;

  const socialIcons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    twitter: FiTwitter,
    instagram: FaInstagram,
    email: FiMail
  };

  return (
    <section id={SECTIONS.HOME} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <p className="text-lg text-gray-300 mb-4">{hero.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">{personal.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">{personal.title}</h2>
          </motion.div>

          <motion.p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed" variants={fadeInUp}>
            {hero.description}
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12" variants={fadeInUp}>
            <Button href={personal.resume} size="lg">
              <FiDownload className="mr-2" />
              Download Resume
            </Button>
            <Button variant="secondary" href={`#${SECTIONS.CONTACT}`} size="lg">
              Get In Touch
            </Button>
          </motion.div>

          <motion.div className="flex items-center justify-center space-x-6" variants={fadeInUp}>
            {Object.entries(social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              if (!Icon || !url) return null;

              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;