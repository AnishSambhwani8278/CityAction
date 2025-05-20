import React from 'react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../../mockData';

const StatsSection: React.FC = () => {
  // Format numbers with commas
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const stats = [
    {
      value: formatNumber(impactMetrics.treesPlanted),
      label: 'Trees Planted',
      icon: '🌳',
    },
    {
      value: formatNumber(impactMetrics.carbonReduced),
      label: 'CO₂ Reduced (tons)',
      icon: '💨',
    },
    {
      value: formatNumber(impactMetrics.volunteerHours),
      label: 'Volunteer Hours',
      icon: '⏱️',
    },
    {
      value: formatNumber(impactMetrics.wasteRecycled),
      label: 'Waste Recycled (kg)',
      icon: '♻️',
    },
  ];

  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Collective Impact</h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Together, we're making a measurable difference in creating more sustainable cities.
            Here's what we've achieved so far:
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <motion.div
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {stat.value}
              </motion.div>
              <p className="text-primary-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;