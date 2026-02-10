import { motion } from 'framer-motion';
import { Card } from '../ui';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { SECTIONS } from '../../constants';

const Skills = () => {
  const { skills } = portfolioData;
  
  const categories = {
    blockchain: { title: 'Blockchain', icon: '⛓️', desc: 'Smart contracts, DeFi protocols, Web3 integration' },
    frontend: { title: 'Frontend', icon: '💻', desc: 'Modern React applications with responsive design' },
    backend: { title: 'Backend', icon: '🔧', desc: 'Scalable APIs and server-side development' }
  };

  return (
    <section id={SECTIONS.SKILLS} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" {...staggerContainer}>
          {skills.map((skill, index) => (
            <motion.div key={skill.name} {...fadeInUp} transition={{ delay: index * 0.1 }}>
              <Card className="group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 group-hover:animate-bounce">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                    <div className="text-sm text-gray-400">{skill.level}% Proficiency</div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" {...fadeInUp}>
          {Object.entries(categories).map(([key, category]) => (
            <Card key={key} className="text-center">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-400">{category.desc}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;