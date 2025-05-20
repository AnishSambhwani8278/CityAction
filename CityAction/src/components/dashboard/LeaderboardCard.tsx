import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';
import Card from '../shared/Card';
import { leaderboard } from '../../mockData';

const LeaderboardCard: React.FC = () => {
  // Get top 10 users
  const topUsers = leaderboard.slice(0, 10);

  // Rank to medal icon mapping
  const rankToIcon = (rank: number) => {
    switch (rank) {
      case 0: // 1st place
        return (
          <div className="p-1.5 bg-yellow-100 rounded-full">
            <Trophy className="h-4 w-4 text-yellow-500" />
          </div>
        );
      case 1: // 2nd place
        return (
          <div className="p-1.5 bg-secondary-100 rounded-full">
            <Medal className="h-4 w-4 text-secondary-400" />
          </div>
        );
      case 2: // 3rd place
        return (
          <div className="p-1.5 bg-amber-100 rounded-full">
            <Medal className="h-4 w-4 text-amber-600" />
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center w-7 h-7 text-secondary-500 font-medium">
            {rank + 1}
          </div>
        );
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-secondary-900">Leaderboard</h2>
        <div className="p-1.5 bg-primary-100 rounded-full">
          <Award className="h-4 w-4 text-primary-600" />
        </div>
      </div>
      
      <ul className="space-y-3">
        {topUsers.map((user, index) => (
          <motion.li
            key={user.id}
            className="flex items-center p-2 rounded-lg hover:bg-secondary-50 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 mr-3">
              {rankToIcon(index)}
            </div>
            <div className="flex-shrink-0 mr-3">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full object-cover border border-secondary-200"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 font-medium text-sm">
                    {user.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-secondary-900 truncate">{user.name}</p>
                <p className="text-sm font-semibold text-primary-600 ml-2">{user.points} pts</p>
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-xs text-secondary-500 capitalize">{user.role.replace('_', ' ')}</p>
                {user.badges > 0 && (
                  <div className="flex items-center">
                    <span className="mx-1 text-xs text-secondary-300">•</span>
                    <Trophy className="h-3 w-3 text-amber-500" />
                    <span className="text-xs text-secondary-500 ml-0.5">{user.badges}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
      
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
        View Full Leaderboard
      </button>
    </Card>
  );
};

export default LeaderboardCard;