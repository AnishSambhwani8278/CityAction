import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-600 relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.5"
          ></path>
          <circle cx="75" cy="25" r="20" fill="#ffffff" opacity="0.2"></circle>
          <circle cx="25" cy="75" r="15" fill="#ffffff" opacity="0.2"></circle>
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to make your city more sustainable?
          </motion.h2>
          
          <motion.p
            className="text-lg text-primary-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join our growing community of citizens, NGOs, and city officials working 
            together to create greener, more sustainable urban environments.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/register">
              <Button 
                size="lg" 
                variant="secondary"
              >
                Create an Account
              </Button>
            </Link>
            <Link to="/initiatives">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Browse Initiatives
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;