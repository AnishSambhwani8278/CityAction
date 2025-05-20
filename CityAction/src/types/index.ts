// User roles
export type UserRole = 'citizen' | 'city_official' | 'organization' | 'admin';

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  points: number;
  badges: Badge[];
  createdAt: Date;
}

// Badge interface
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
}

// Initiative categories
export type InitiativeCategory = 
  | 'clean_energy' 
  | 'waste_management' 
  | 'green_spaces' 
  | 'sustainable_transport' 
  | 'water_conservation'
  | 'biodiversity'
  | 'education'
  | 'community'
  | 'other';

// Initiative status
export type InitiativeStatus = 'proposed' | 'approved' | 'in_progress' | 'completed' | 'rejected';

// Initiative interface
export interface Initiative {
  id: string;
  title: string;
  description: string;
  category: InitiativeCategory;
  status: InitiativeStatus;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  creator: {
    id: string;
    name: string;
    role: UserRole;
  };
  votes: {
    up: number;
    down: number;
  };
  metrics?: {
    [key: string]: number;
  };
  startDate?: Date;
  endDate?: Date;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Event interface
export interface Event {
  id: string;
  initiativeId: string;
  title: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  date: Date;
  startTime: string;
  endTime: string;
  attendees: {
    id: string;
    name: string;
    role: UserRole;
  }[];
  maxAttendees?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Comment interface
export interface Comment {
  id: string;
  initiativeId: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  userAvatar?: string;
  content: string;
  createdAt: Date;
}

// Impact metrics
export interface ImpactMetrics {
  treesPlanted: number;
  carbonReduced: number;
  wasteRecycled: number;
  volunteerHours: number;
  energySaved: number;
  waterSaved: number;
}