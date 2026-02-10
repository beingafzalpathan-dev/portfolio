import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import Card from './Card';
import Button from './Button';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in blockchain and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group relative overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <FiStar className="mr-1" size={14} />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <Button
                        href={project.github}
                        variant="secondary"
                        size="sm"
                        className="!p-2"
                      >
                        <FiGithub size={16} />
                      </Button>
                      <Button
                        href={project.demo}
                        variant="primary"
                        size="sm"
                        className="!p-2"
                      >
                        <FiExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Button
                      href={project.github}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <FiGithub className="mr-2" size={16} />
                      Code
                    </Button>
                    <Button
                      href={project.demo}
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      <FiExternalLink className="mr-2" size={16} />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button href="https://github.com/username" variant="secondary" size="lg">
            <FiGithub className="mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;