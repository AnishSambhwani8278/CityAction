import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Initiative } from '../../types';
import Card from '../shared/Card';
import Badge from '../shared/Badge';
import { getCategoryColor, categoryIcons } from '../../mockData';
import Button from '../shared/Button';

interface InitiativeCardProps {
  initiative: Initiative;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ initiative }) => {
  // Format date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Status badge variant
  const statusVariant = (): 'primary' | 'success' | 'warning' | 'error' => {
    switch (initiative.status) {
      case 'proposed':
        return 'warning';
      case 'approved':
        return 'primary';
      case 'in_progress':
        return 'primary';
      case 'completed':
        return 'success';
      case 'rejected':
        return 'error';
      default:
        return 'primary';
    }
  };

  return (
    <Card 
      className="h-full flex flex-col"
      interactive
      onClick={() => {}}
    >
      {/* Card header with image */}
      <div className="relative">
        <div className="w-full h-48 bg-secondary-200 overflow-hidden">
          {initiative.images && initiative.images.length > 0 ? (
            <img 
              src={initiative.images[0]}
              alt={initiative.title}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary-100">
              <span className="text-secondary-400">No image available</span>
            </div>
          )}
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge variant={statusVariant()}>
            {initiative.status.replace('_', ' ')}
          </Badge>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span 
            className="text-xs font-medium px-2 py-1 rounded-full"
            style={{ 
              backgroundColor: `${getCategoryColor(initiative.category)}20`,
              color: getCategoryColor(initiative.category) 
            }}
          >
            {initiative.category.replace('_', ' ').toUpperCase()}
          </span>
        </div>
        
        <h3 className="font-semibold text-secondary-900 text-lg mb-1">{initiative.title}</h3>
        
        <p className="text-secondary-600 text-sm line-clamp-2 mb-3">
          {initiative.description}
        </p>
        
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center text-xs text-secondary-500">
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            <span className="truncate">{initiative.location.address}</span>
          </div>
          {initiative.startDate && (
            <div className="flex items-center text-xs text-secondary-500">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              <span>
                {formatDate(initiative.startDate)} - {formatDate(initiative.endDate)}
              </span>
            </div>
          )}
          <div className="flex items-center text-xs text-secondary-500">
            <Users className="h-3.5 w-3.5 mr-1.5" />
            <span>{initiative.metrics?.participants || 0} participants</span>
          </div>
        </div>
      
        <div className="mt-auto pt-4 border-t border-secondary-100 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 text-primary-600 mr-1" />
              <span className="text-sm font-medium">{initiative.votes.up}</span>
            </div>
            <div className="flex items-center">
              <ThumbsDown className="h-4 w-4 text-error-500 mr-1" />
              <span className="text-sm font-medium">{initiative.votes.down}</span>
            </div>
          </div>
          <Link to={`/initiatives/${initiative.id}`}>
            <Button size="sm" variant="outline">View</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default InitiativeCard;