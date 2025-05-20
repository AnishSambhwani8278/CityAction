import React from 'react';
import Layout from '../components/layout/Layout';
import { users, badges } from '../mockData';
import { Award, MessageSquare, ThumbsUp } from 'lucide-react';
import Card from '../components/shared/Card';
import Badge from '../components/shared/Badge';

const CommunityPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
            Community Members
          </h1>
          <p className="text-secondary-600">
            Meet the people making Jaipur more sustainable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card key={user.id} className="p-6">
              <div className="flex items-center space-x-4">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-2xl font-medium text-primary-700">
                      {user.name[0]}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900">
                    {user.name}
                  </h3>
                  <p className="text-sm text-secondary-600 capitalize">
                    {user.role.replace('_', ' ')}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-primary-500 mr-1" />
                  <span className="text-sm text-secondary-700">
                    {user.points} points
                  </span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 text-primary-500 mr-1" />
                  <span className="text-sm text-secondary-700">
                    {Math.floor(Math.random() * 50)} posts
                  </span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 text-primary-500 mr-1" />
                  <span className="text-sm text-secondary-700">
                    {Math.floor(Math.random() * 100)} likes
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-secondary-900 mb-2">
                  Badges
                </h4>
                <div className="flex flex-wrap gap-2">
                  {user.badges.map((badge) => (
                    <Badge
                      key={badge.id}
                      variant="primary"
                      className="text-xs"
                    >
                      {badge.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPage;