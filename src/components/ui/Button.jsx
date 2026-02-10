import { motion } from 'framer-motion';
import { scaleOnHover } from '../../utils/animations';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white neon-glow',
    secondary: 'glass text-white hover:bg-white/10',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base', 
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none ${variants[variant]} ${sizes[size]} ${className}`;
  
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      className={classes}
      {...scaleOnHover}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;