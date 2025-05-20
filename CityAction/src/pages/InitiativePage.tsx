import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { initiatives, comments } from '../mockData';
import { Calendar, MapPin, Users, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import Badge from '../components/shared/Badge';

const InitiativePage: React.FC = () => {
  const { id } = useParams();
  const initiative = initiatives.find(i => i.id === id);
  const initiativeComments = comments.filter(c => c.initiativeId === id);

  if (!initiative) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1>Initiative not found</h1>
        </div>
      </Layout>
    );
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge variant="primary" className="mb-2">
              {initiative.category.replace('_', ' ')}
            </Badge>
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">
              {initiative.title}
            </h1>
            <div className="flex items-center text-secondary-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">
                Posted on {formatDate(initiative.createdAt)}
              </span>
            </div>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src={initiative.images?.[0]}
              alt={initiative.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="md:col-span-2 p-6">
              <h2 className="text-xl font-semibold mb-4">About this Initiative</h2>
              <p className="text-secondary-600 mb-6">{initiative.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                  <span>{initiative.location.address}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-600 mr-2" />
                  <span>{initiative.metrics?.participants} participants</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                  <span>
                    {formatDate(initiative.startDate!)} - {formatDate(initiative.endDate!)}
                  </span>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-medium mb-4">Initiative Status</h3>
                <Badge
                  variant={initiative.status === 'completed' ? 'success' : 'primary'}
                  className="mb-4"
                >
                  {initiative.status.replace('_', ' ')}
                </Badge>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ThumbsUp className="h-5 w-5 text-primary-600 mr-1" />
                    <span className="font-medium">{initiative.votes.up}</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsDown className="h-5 w-5 text-error-500 mr-1" />
                    <span className="font-medium">{initiative.votes.down}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-4">Created by</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-700 font-medium">
                      {initiative.creator.name[0]}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{initiative.creator.name}</p>
                    <p className="text-sm text-secondary-600 capitalize">
                      {initiative.creator.role.replace('_', ' ')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Comments</h2>
              <MessageSquare className="h-5 w-5 text-primary-600" />
            </div>
            
            <div className="space-y-6">
              {initiativeComments.map((comment) => (
                <div key={comment.id} className="flex space-x-4">
                  {comment.userAvatar ? (
                    <img
                      src={comment.userAvatar}
                      alt={comment.userName}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-700 font-medium">
                        {comment.userName[0]}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">{comment.userName}</span>
                      <span className="text-sm text-secondary-500">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-secondary-600">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button fullWidth>Add Comment</Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default InitiativePage;