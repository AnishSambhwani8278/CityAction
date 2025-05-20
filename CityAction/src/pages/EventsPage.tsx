import React from 'react';
import Layout from '../components/layout/Layout';
import { events } from '../mockData';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import Badge from '../components/shared/Badge';

const EventsPage: React.FC = () => {
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
              Upcoming Events
            </h1>
            <p className="text-secondary-600">
              Join sustainability events happening around Jaipur
            </p>
          </div>
          <Button className="mt-4 md:mt-0">Create Event</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="flex flex-col">
              <div className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-secondary-600 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-sm text-secondary-600">
                    <Clock className="h-4 w-4 mr-2 text-primary-500" />
                    {event.startTime} - {event.endTime}
                  </div>
                  <div className="flex items-center text-sm text-secondary-600">
                    <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                    {event.location.address}
                  </div>
                  <div className="flex items-center text-sm text-secondary-600">
                    <Users className="h-4 w-4 mr-2 text-primary-500" />
                    {event.attendees.length} / {event.maxAttendees} attendees
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {event.attendees.slice(0, 3).map((attendee) => (
                    <div
                      key={attendee.id}
                      className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-sm font-medium text-primary-700"
                    >
                      {attendee.name[0]}
                    </div>
                  ))}
                  {event.attendees.length > 3 && (
                    <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-sm font-medium text-secondary-700">
                      +{event.attendees.length - 3}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-auto border-t border-secondary-100 p-4">
                <Button fullWidth>Join Event</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;