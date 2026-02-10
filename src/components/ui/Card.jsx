import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glass = true,
  ...props 
}) => {
  const classes = `rounded-xl p-6 transition-all duration-300 ${
    glass ? 'glass' : 'bg-dark-light border border-white/10'
  } ${hover ? 'hover:scale-105 hover:shadow-2xl' : ''} ${className}`;
  
  return (
    <motion.div
      className={classes}
      {...fadeInUp}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;