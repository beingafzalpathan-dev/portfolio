import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glass = true,
  ...props 
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  const glassClasses = glass ? 'glass' : 'bg-dark-light border border-white/10';
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl' : '';
  
  const classes = `${baseClasses} ${glassClasses} ${hoverClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;