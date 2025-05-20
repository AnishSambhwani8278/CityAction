import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  interactive = false,
  onClick
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-sm overflow-hidden';
  const interactiveStyles = interactive 
    ? 'cursor-pointer transition-all hover:shadow-md' 
    : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${interactiveStyles} ${className}`}
      onClick={onClick}
      whileHover={interactive ? { y: -4 } : {}}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;