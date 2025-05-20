import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Calendar, ThumbsUp, MessageSquare, Award } from 'lucide-react';
import Badge from '../shared/Badge';

interface Notification {
  id: string;
  type: 'event' | 'like' | 'comment' | 'badge';
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'event',
    title: 'Upcoming Tree Planting Event',
    description: 'Don\'t forget about the tree planting event tomorrow at Central Park!',
    time: '1 hour ago',
    read: false,
  },
  {
    id: '2',
    type: 'like',
    title: 'New Support',
    description: 'Your initiative "Clean Energy Project" received 5 new supporters',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '3',
    type: 'comment',
    title: 'New Comment',
    description: 'Sarah commented on your Water Conservation proposal',
    time: '3 hours ago',
    read: true,
  },
  {
    id: '4',
    type: 'badge',
    title: 'New Badge Earned!',
    description: 'Congratulations! You\'ve earned the "Green Warrior" badge',
    time: '1 day ago',
    read: true,
  },
];

interface NotificationsPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsPopover: React.FC<NotificationsPopoverProps> = ({ isOpen, onClose }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'event':
        return <Calendar className="h-5 w-5 text-primary-500" />;
      case 'like':
        return <ThumbsUp className="h-5 w-5 text-primary-500" />;
      case 'comment':
        return <MessageSquare className="h-5 w-5 text-primary-500" />;
      case 'badge':
        return <Award className="h-5 w-5 text-primary-500" />;
      default:
        return <Bell className="h-5 w-5 text-primary-500" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div className="p-4 border-b border-secondary-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-secondary-900">Notifications</h3>
                <button
                  onClick={onClose}
                  className="text-secondary-400 hover:text-secondary-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-secondary-100 hover:bg-secondary-50 transition-colors ${
                    !notification.read ? 'bg-primary-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-secondary-900">
                        {notification.title}
                      </p>
                      <p className="text-sm text-secondary-500 line-clamp-2">
                        {notification.description}
                      </p>
                      <p className="text-xs text-secondary-400 mt-1">
                        {notification.time}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="flex-shrink-0">
                        <Badge variant="primary" size="sm">New</Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-secondary-100 bg-secondary-50">
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                View all notifications
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationsPopover;