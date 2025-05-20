import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightCircle, MapPin, Users, CalendarCheck } from 'lucide-react';
import Button from '../shared/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative bg-gradient-to-b from-primary-50 to-white pt-12 pb-20 md:pt-16 md:pb-24">
      {/* Green blurred circles for decoration */}
      <div className="absolute top-20 right-[5%] w-64 h-64 bg-primary-300 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-32 left-[10%] w-72 h-72 bg-primary-400 rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-block bg-primary-100 text-primary-700 font-medium text-sm px-3 py-1 rounded-full">Building Sustainable Cities Together</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight"
          >
            Empower your community with sustainable initiatives
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-secondary-600 mb-8 max-w-3xl mx-auto"
          >
            Join citizens, NGOs, and municipal bodies to collaborate on impactful sustainability projects. Track progress, participate in events, and make a real difference in your city.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link to="/map">
              <Button 
                size="lg" 
                icon={<MapPin className="h-5 w-5" />}
              >
                Explore Map
              </Button>
            </Link>
            <Link to="/initiatives">
              <Button 
                variant="outline" 
                size="lg"
                icon={<ArrowRightCircle className="h-5 w-5" />}
              >
                Browse Initiatives
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <motion.div 
              variants={itemVariants}
              className="p-6 bg-white rounded-xl shadow-sm border border-secondary-100 transition-transform hover:-translate-y-1"
            >
              <div className="p-2 bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Interactive Map</h3>
              <p className="text-secondary-600 text-sm">Discover sustainability initiatives in your neighborhood through our interactive city map.</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="p-6 bg-white rounded-xl shadow-sm border border-secondary-100 transition-transform hover:-translate-y-1"
            >
              <div className="p-2 bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Community Engagement</h3>
              <p className="text-secondary-600 text-sm">Vote on proposals, track initiative progress, and contribute to a more sustainable city.</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="p-6 bg-white rounded-xl shadow-sm border border-secondary-100 transition-transform hover:-translate-y-1"
            >
              <div className="p-2 bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <CalendarCheck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Join Events</h3>
              <p className="text-secondary-600 text-sm">Participate in local sustainability events, from tree planting to community cleanups.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;