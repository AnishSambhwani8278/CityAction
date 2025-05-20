import React from 'react';
import Layout from '../components/layout/Layout';
import ImpactMetricsCard from '../components/dashboard/ImpactMetricsCard';
import LeaderboardCard from '../components/dashboard/LeaderboardCard';

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
              Sustainability Dashboard
            </h1>
            <p className="text-secondary-600">
              Track the impact of sustainability initiatives across the city
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <ImpactMetricsCard />
          </div>
          <div>
            <LeaderboardCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;