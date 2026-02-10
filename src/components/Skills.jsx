import { motion } from 'framer-motion';
import Card from './Card';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 group-hover:animate-bounce">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {skill.name}
                    </h3>
                    <div className="text-sm text-gray-400">
                      {skill.level}% Proficiency
                    </div>
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
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Categories */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="text-center">
            <div className="text-4xl mb-4">⛓️</div>
            <h3 className="text-xl font-bold text-white mb-2">Blockchain</h3>
            <p className="text-gray-400">
              Smart contracts, DeFi protocols, and Web3 integration
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-white mb-2">Frontend</h3>
            <p className="text-gray-400">
              Modern React applications with responsive design
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-white mb-2">Backend</h3>
            <p className="text-gray-400">
              Scalable APIs and server-side development
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;