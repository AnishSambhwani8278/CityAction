import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ThumbsUp, ThumbsDown, Filter } from 'lucide-react';
import { Initiative } from '../../types';
import { initiatives } from '../../mockData';
import Button from '../shared/Button';
import Badge from '../shared/Badge';
import L from 'leaflet';

const categoryColors = {
  clean_energy: '#22c55e',
  waste_management: '#f59e0b',
  green_spaces: '#10b981',
  sustainable_transport: '#3b82f6',
  water_conservation: '#06b6d4',
  biodiversity: '#84cc16',
  education: '#8b5cf6',
  community: '#ec4899',
  other: '#6b7280'
};

const createMarkerIcon = (category: string) => {
  const color = categoryColors[category as keyof typeof categoryColors] || '#6b7280';
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 36px;
        height: 36px;
        background-color: ${color};
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20]
  });
};

const MapView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredInitiatives, setFilteredInitiatives] = useState<Initiative[]>(initiatives);
  const [showFilters, setShowFilters] = useState(false);

  const center: [number, number] = [26.9124, 75.7873];

  useEffect(() => {
    setFilteredInitiatives(
      selectedCategory 
        ? initiatives.filter(i => i.category === selectedCategory)
        : initiatives
    );
  }, [selectedCategory]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="h-[calc(100vh-64px)] flex">
      {/* Sidebar */}
      <div className={`
        w-80 bg-white border-r border-gray-200 flex-shrink-0 transition-all duration-300
        ${showFilters ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Filters</h2>
          <div className="space-y-6">
            {Object.entries(categoryColors).map(([category, color]) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`
                  w-full px-4 py-2 rounded-lg text-left font-medium transition-all
                  flex items-center gap-3
                  ${selectedCategory === category
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'}
                `}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sustainability Map</h1>
              <p className="text-gray-600">Explore initiatives across Jaipur</p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="primary">
              {filteredInitiatives.length} Initiatives
            </Badge>
            {selectedCategory && (
              <Badge variant="secondary" onClick={() => setSelectedCategory(null)}>
                {selectedCategory.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                <span className="ml-1">×</span>
              </Badge>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 relative">
          <MapContainer
            center={center}
            zoom={12}
            className="h-full w-full z-0"
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {filteredInitiatives.map((initiative) => (
              <Marker
                key={initiative.id}
                position={[initiative.location.latitude, initiative.location.longitude]}
                icon={createMarkerIcon(initiative.category)}
              >
                <Popup className="initiative-popup">
                  <div className="w-72">
                    {initiative.images?.[0] && (
                      <img
                        src={initiative.images[0]}
                        alt={initiative.title}
                        className="w-full h-36 object-cover rounded-t-lg"
                      />
                    )}
                    <div className="p-4">
                      <div className="mb-2">
                        <Badge
                          variant="primary"
                          style={{
                            backgroundColor: `${categoryColors[initiative.category as keyof typeof categoryColors]}20`,
                            color: categoryColors[initiative.category as keyof typeof categoryColors]
                          }}
                        >
                          {initiative.category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </Badge>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {initiative.description}
                      </p>
                      
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="truncate">{initiative.location.address}</span>
                        </div>
                        {initiative.startDate && (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(initiative.startDate)}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{initiative.metrics?.participants || 0} participants</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium">{initiative.votes.up}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsDown className="h-4 w-4 text-red-500" />
                            <span className="text-sm font-medium">{initiative.votes.down}</span>
                          </div>
                        </div>
                        <Link to={`/initiatives/${initiative.id}`}>
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapView;