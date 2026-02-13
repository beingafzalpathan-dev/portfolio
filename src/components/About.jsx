import { motion } from 'framer-motion';
import Card from './Card';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer bridging traditional web and blockchain technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-6 overflow-hidden relative group-image">
                  {portfolioData.personal.image ? (
                    <div className="w-72 h-72 bg-gradient-to-br from-primary to-secondary rounded-full p-1 shadow-2xl shadow-primary/20 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-primary/50 cursor-pointer">
                      <img
                        src={portfolioData.personal.image}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full bg-dark"
                      />
                    </div>
                  ) : (
                    <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-6xl font-bold text-white">
                      AK
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {about.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </Card>
                <Card className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">4+</div>
                  <div className="text-gray-400">Years Experience</div>
                </Card>
                <Card className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-400">Smart Contracts</div>
                </Card>
                <Card className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">$2M+</div>
                  <div className="text-gray-400">TVL Managed</div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div >
      </div >
    </section >
  );
};

export default About;