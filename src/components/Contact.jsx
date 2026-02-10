import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Card from './Card';
import Button from './Button';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal, social } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personal.location,
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: social.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: social.twitter, label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-gray-600 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-gray-600 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-gray-600 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-light border border-gray-600 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <FiSend className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <Card>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 text-gray-300 hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Let's Work Together</h3>
                <p className="text-gray-300 mb-6">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a blockchain solution, web application, or technical consultation, 
                  I'd love to hear from you.
                </p>
                <div className="flex space-x-4">
                  <Button href={personal.resume} variant="secondary">
                    Download CV
                  </Button>
                  <Button href={`mailto:${personal.email}`}>
                    Quick Email
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;