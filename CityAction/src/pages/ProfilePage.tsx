import React from 'react';
import Layout from '../components/layout/Layout';
import { users } from '../mockData';
import { Award, Calendar, MapPin, Settings, Edit } from 'lucide-react';
import Card from '../components/shared/Card';
import Badge from '../components/shared/Badge';
import Button from '../components/shared/Button';

const ProfilePage: React.FC = () => {
  const currentUser = users[0];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-32 bg-primary-600"></div>
            <div className="px-6 pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 mb-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-md"
                />
                <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                  <h1 className="text-2xl font-bold text-secondary-900">
                    {currentUser.name}
                  </h1>
                  <p className="text-secondary-600 capitalize">
                    {currentUser.role.replace('_', ' ')}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Edit className="h-4 w-4" />}
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-4">
                  <h3 className="font-medium text-secondary-900 mb-3">Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600">Points</span>
                      <span className="font-medium text-secondary-900">
                        {currentUser.points}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600">Initiatives</span>
                      <span className="font-medium text-secondary-900">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600">Events Attended</span>
                      <span className="font-medium text-secondary-900">8</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h3 className="font-medium text-secondary-900 mb-3">Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentUser.badges.map((badge) => (
                      <Badge
                        key={badge.id}
                        variant="primary"
                        className="text-xs"
                      >
                        {badge.name}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className="p-4">
                  <h3 className="font-medium text-secondary-900 mb-3">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    <div className="text-sm text-secondary-600">
                      Joined Tree Planting Initiative
                    </div>
                    <div className="text-sm text-secondary-600">
                      Commented on Water Conservation Project
                    </div>
                    <div className="text-sm text-secondary-600">
                      Earned Green Starter Badge
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;