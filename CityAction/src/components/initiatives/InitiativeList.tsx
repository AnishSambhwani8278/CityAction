import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import InitiativeCard from './InitiativeCard';
import { Initiative, InitiativeCategory } from '../../types';
import { initiatives } from '../../mockData';

const InitiativeList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<InitiativeCategory | ''>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [filteredInitiatives, setFilteredInitiatives] = useState<Initiative[]>(initiatives);
  const [showFilters, setShowFilters] = useState(false);

  // Categories
  const categories: { id: InitiativeCategory; label: string }[] = [
    { id: 'clean_energy', label: 'Clean Energy' },
    { id: 'waste_management', label: 'Waste Management' },
    { id: 'green_spaces', label: 'Green Spaces' },
    { id: 'sustainable_transport', label: 'Sustainable Transport' },
    { id: 'water_conservation', label: 'Water Conservation' },
    { id: 'biodiversity', label: 'Biodiversity' },
    { id: 'education', label: 'Education' },
    { id: 'community', label: 'Community' },
    { id: 'other', label: 'Other' },
  ];

  // Statuses
  const statuses = [
    { id: 'proposed', label: 'Proposed' },
    { id: 'approved', label: 'Approved' },
    { id: 'in_progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'rejected', label: 'Rejected' },
  ];

  // Filter initiatives based on search and filters
  useEffect(() => {
    let filtered = initiatives;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((initiative) => 
        initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        initiative.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((initiative) => initiative.category === selectedCategory);
    }
    
    // Filter by status
    if (selectedStatus) {
      filtered = filtered.filter((initiative) => initiative.status === selectedStatus);
    }
    
    setFilteredInitiatives(filtered);
  }, [searchTerm, selectedCategory, selectedStatus]);

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedStatus('');
    setSearchTerm('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
            Sustainability Initiatives
          </h1>
          <p className="text-secondary-600 mb-4 md:mb-0">
            Browse, support, and participate in sustainability initiatives across the city
          </p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg md:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-secondary-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-secondary-200 rounded-lg text-sm placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Search initiatives..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-secondary-900 mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      id={`category-${category.id}`}
                      type="radio"
                      name="category"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                      checked={selectedCategory === category.id}
                      onChange={() => setSelectedCategory(category.id)}
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="ml-2 block text-sm text-secondary-700"
                    >
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-secondary-900 mb-3">Status</h3>
              <div className="space-y-2">
                {statuses.map((status) => (
                  <div key={status.id} className="flex items-center">
                    <input
                      id={`status-${status.id}`}
                      type="radio"
                      name="status"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                      checked={selectedStatus === status.id}
                      onChange={() => setSelectedStatus(status.id)}
                    />
                    <label
                      htmlFor={`status-${status.id}`}
                      className="ml-2 block text-sm text-secondary-700"
                    >
                      {status.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={resetFilters}
              className="w-full py-2 text-center text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="lg:col-span-3">
          {filteredInitiatives.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInitiatives.map((initiative, index) => (
                <motion.div 
                  key={initiative.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <InitiativeCard initiative={initiative} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Filter className="h-12 w-12 text-secondary-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-secondary-900 mb-2">No initiatives found</h3>
              <p className="text-secondary-600 mb-4">
                No initiatives match your current filters. Try adjusting your search or filters.
              </p>
              <button
                onClick={resetFilters}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InitiativeList;