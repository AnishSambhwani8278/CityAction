import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ThumbsUp, Award, Users, BarChart3 } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: 'Interactive Sustainability Map',
      description: 'Visualize initiatives by location. Discover what\'s happening in your neighborhood with geo-tagged projects.',
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary-600" />,
      title: 'Event Management',
      description: 'Organize and join sustainability events. From tree planting to cleanups, find opportunities to make a difference.',
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-primary-600" />,
      title: 'Voting & Feedback',
      description: 'Support initiatives you believe in. Provide feedback to help improve sustainability projects in your community.',
    },
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: 'Gamification & Rewards',
      description: 'Earn points and badges for your participation. Climb the sustainability leaderboard in your community.',
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: 'Role-Based Access',
      description: 'Specialized features for citizens, organizations, and city officials. Everyone has a role to play in sustainability.',
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary-600" />,
      title: 'Impact Analytics',
      description: 'Track and visualize your community\'s sustainability progress. See the real impact of collective action.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Features Built for Sustainable Communities
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Our platform provides powerful tools to help communities collaborate on making 
            their cities more sustainable and environmentally friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:border-primary-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-2 bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl text-secondary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;