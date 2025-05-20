import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Card from '../shared/Card';
import { impactMetrics } from '../../mockData';

const MetricCard: React.FC<{
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}> = ({ title, value, unit, icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-secondary-500 font-medium">{title}</p>
          <h3 className="text-2xl font-bold" style={{ color }}>
            {value.toLocaleString()}
            <span className="text-sm font-normal text-secondary-500 ml-1">{unit}</span>
          </h3>
        </div>
        <div
          className="p-2 rounded-full"
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

const ImpactMetricsCard: React.FC = () => {
  const chartData = [
    { name: 'Trees', value: impactMetrics.treesPlanted, color: '#22c55e' },
    { name: 'CO₂', value: impactMetrics.carbonReduced, color: '#3b82f6' },
    { name: 'Waste', value: impactMetrics.wasteRecycled, color: '#f59e0b' },
    { name: 'Hours', value: impactMetrics.volunteerHours, color: '#8b5cf6' },
    { name: 'Energy', value: impactMetrics.energySaved, color: '#f43f5e' },
    { name: 'Water', value: impactMetrics.waterSaved, color: '#0ea5e9' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="md:col-span-2 xl:col-span-3">
        <Card className="p-4">
          <h2 className="text-xl font-semibold text-secondary-900 mb-4">Impact Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <MetricCard
                title="Trees Planted"
                value={impactMetrics.treesPlanted}
                unit="trees"
                icon={<span className="text-primary-600 text-lg">🌳</span>}
                color="#22c55e"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MetricCard
                title="Carbon Reduced"
                value={impactMetrics.carbonReduced}
                unit="tons"
                icon={<span className="text-blue-600 text-lg">💨</span>}
                color="#3b82f6"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <MetricCard
                title="Waste Recycled"
                value={impactMetrics.wasteRecycled}
                unit="kg"
                icon={<span className="text-amber-600 text-lg">♻️</span>}
                color="#f59e0b"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <MetricCard
                title="Volunteer Hours"
                value={impactMetrics.volunteerHours}
                unit="hours"
                icon={<span className="text-purple-600 text-lg">⏱️</span>}
                color="#8b5cf6"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <MetricCard
                title="Energy Saved"
                value={impactMetrics.energySaved}
                unit="kWh"
                icon={<span className="text-rose-600 text-lg">⚡</span>}
                color="#f43f5e"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <MetricCard
                title="Water Saved"
                value={impactMetrics.waterSaved}
                unit="gal"
                icon={<span className="text-sky-600 text-lg">💧</span>}
                color="#0ea5e9"
              />
            </motion.div>
          </div>
        </Card>
      </div>

      <div className="md:col-span-2 xl:col-span-3">
        <Card className="p-4 h-80">
          <h2 className="text-xl font-semibold text-secondary-900 mb-4">Impact Visualization</h2>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value}`, '']}
                labelFormatter={(label) => `${label}`}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default ImpactMetricsCard;