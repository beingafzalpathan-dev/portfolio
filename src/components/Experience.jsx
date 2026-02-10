import { motion } from 'framer-motion';
import Card from './Card';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-dark z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                  <Card>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-lg text-secondary font-semibold">
                        {exp.company}
                      </h4>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold gradient-text mb-1">4+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </Card>

          <Card className="text-center">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-2xl font-bold gradient-text mb-1">1</div>
            <div className="text-gray-400 text-sm">Companies</div>
          </Card>

          <Card className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold gradient-text mb-1">20+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </Card>

          <Card className="text-center">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold gradient-text mb-1">10K+</div>
            <div className="text-gray-400 text-sm">Users Impacted</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;