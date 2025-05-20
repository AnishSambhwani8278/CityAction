import { Initiative, Event, User, Comment, Badge, InitiativeCategory, UserRole } from '../types';

const badges: Badge[] = [
  {
    id: 'b1',
    name: 'Green Starter',
    description: 'Participated in first sustainability initiative',
    icon: 'award',
    criteria: 'Join first event',
  },
  {
    id: 'b2',
    name: 'Tree Hugger',
    description: 'Participated in tree planting initiatives',
    icon: 'tree',
    criteria: 'Plant 5 trees',
  },
  {
    id: 'b3',
    name: 'Waste Warrior',
    description: 'Active in waste reduction efforts',
    icon: 'recycle',
    criteria: 'Participate in 3 cleanup events',
  },
  {
    id: 'b4',
    name: 'Community Leader',
    description: 'Created initiatives that gained community support',
    icon: 'users',
    criteria: 'Create 3 initiatives with 10+ participants',
  },
  {
    id: 'b5',
    name: 'Sustainability Champion',
    description: 'Contributed significantly to city sustainability',
    icon: 'award',
    criteria: 'Earn 1000 sustainability points',
  },
];

export const users: User[] = [
  {
    id: 'u1',
    name: 'Arjun Sharma',
    email: 'arjun@example.com',
    role: 'citizen',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    points: 350,
    badges: [badges[0], badges[1]],
    createdAt: new Date('2023-01-15'),
  },
  {
    id: 'u2',
    name: 'Priya Verma',
    email: 'priya@jmc.gov.in',
    role: 'city_official',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    points: 520,
    badges: [badges[0], badges[2], badges[4]],
    createdAt: new Date('2022-11-10'),
  },
  {
    id: 'u3',
    name: 'Green Jaipur NGO',
    email: 'contact@greenjaipur.org',
    role: 'organization',
    avatar: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    points: 1200,
    badges: [badges[0], badges[1], badges[2], badges[3], badges[4]],
    createdAt: new Date('2022-08-22'),
  },
];

const cityCenter = { lat: 26.9124, lng: 75.7873 };

const categoryLocations: Record<InitiativeCategory, { lat: number, lng: number }[]> = {
  'clean_energy': [
    { lat: 26.9324, lng: 75.7673 },
    { lat: 26.8824, lng: 75.8173 },
  ],
  'waste_management': [
    { lat: 26.9524, lng: 75.7473 },
    { lat: 26.8924, lng: 75.8273 },
  ],
  'green_spaces': [
    { lat: 26.9124, lng: 75.7973 },
    { lat: 26.8724, lng: 75.8073 },
  ],
  'sustainable_transport': [
    { lat: 26.9424, lng: 75.7573 },
    { lat: 26.8624, lng: 75.8373 },
  ],
  'water_conservation': [
    { lat: 26.9224, lng: 75.7773 },
    { lat: 26.8824, lng: 75.8473 },
  ],
  'biodiversity': [
    { lat: 26.9024, lng: 75.7873 },
    { lat: 26.8924, lng: 75.8573 },
  ],
  'education': [
    { lat: 26.9624, lng: 75.7673 },
    { lat: 26.8724, lng: 75.8273 },
  ],
  'community': [
    { lat: 26.9424, lng: 75.7973 },
    { lat: 26.8824, lng: 75.8073 },
  ],
  'other': [
    { lat: 26.9124, lng: 75.8173 },
  ],
};

const getRandomAddress = (lat: number, lng: number) => {
  const areas = ['Malviya Nagar', 'C-Scheme', 'Vaishali Nagar', 'Raja Park', 'Mansarovar', 'Jawahar Nagar'];
  const streets = ['Road', 'Marg', 'Path', 'Street'];
  const numbers = Math.floor(Math.random() * 500) + 100;
  return `${numbers} ${areas[Math.floor(Math.random() * areas.length)]}, ${streets[Math.floor(Math.random() * streets.length)]}, Jaipur`;
};

const initiativeImages = [
  "https://images.pexels.com/photos/9799706/pexels-photo-9799706.jpeg",
  "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg",
  "https://images.pexels.com/photos/3062313/pexels-photo-3062313.jpeg",
  "https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg",
  "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
  "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
];

export const generateInitiatives = (): Initiative[] => {
  const initiatives: Initiative[] = [];
  const categories: InitiativeCategory[] = ['clean_energy', 'waste_management', 'green_spaces', 'sustainable_transport', 'water_conservation', 'biodiversity', 'education', 'community', 'other'];
  const statuses = ['proposed', 'approved', 'in_progress', 'completed'];
  
  categories.forEach((category, categoryIndex) => {
    const locations = categoryLocations[category];
    
    locations.forEach((location, locationIndex) => {
      const creatorIndex = Math.floor(Math.random() * users.length);
      const creatorRole = users[creatorIndex].role;
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const imageIndex = Math.floor(Math.random() * initiativeImages.length);
      
      const initiative: Initiative = {
        id: `i${categoryIndex + 1}${locationIndex + 1}`,
        title: `Jaipur ${category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Initiative ${locationIndex + 1}`,
        description: `A community initiative focusing on ${category.replace('_', ' ')} improvements in Jaipur. This project aims to create a more sustainable Pink City through collaborative efforts.`,
        category: category,
        status: status as any,
        location: {
          latitude: location.lat,
          longitude: location.lng,
          address: getRandomAddress(location.lat, location.lng),
        },
        creator: {
          id: users[creatorIndex].id,
          name: users[creatorIndex].name,
          role: creatorRole as UserRole,
        },
        votes: {
          up: Math.floor(Math.random() * 50),
          down: Math.floor(Math.random() * 10),
        },
        metrics: {
          participants: Math.floor(Math.random() * 100) + 10,
          impact: Math.floor(Math.random() * 500) + 100,
        },
        startDate: new Date(2023, Math.floor(Math.random() * 6), Math.floor(Math.random() * 28) + 1),
        endDate: new Date(2024, Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 28) + 1),
        images: [initiativeImages[imageIndex]],
        createdAt: new Date(2023, Math.floor(Math.random() * 6), Math.floor(Math.random() * 28) + 1),
        updatedAt: new Date(),
      };
      
      initiatives.push(initiative);
    });
  });
  
  return initiatives;
};

export const generateEvents = (initiatives: Initiative[]): Event[] => {
  const events: Event[] = [];
  
  initiatives.forEach(initiative => {
    if (initiative.status === 'approved' || initiative.status === 'in_progress') {
      const numEvents = Math.floor(Math.random() * 3) + 1;
      
      for (let i = 0; i < numEvents; i++) {
        const eventDate = new Date();
        eventDate.setDate(eventDate.getDate() + Math.floor(Math.random() * 60));
        
        const attendees = [];
        const numAttendees = Math.floor(Math.random() * 6) + 1;
        
        for (let j = 0; j < numAttendees; j++) {
          if (j < users.length) {
            attendees.push({
              id: users[j].id,
              name: users[j].name,
              role: users[j].role,
            });
          }
        }
        
        const event: Event = {
          id: `e${initiative.id}${i}`,
          initiativeId: initiative.id,
          title: `${initiative.title} - Event ${i + 1}`,
          description: `Join us for this ${initiative.category.replace('_', ' ')} event in Jaipur. Bring your friends and family to make a positive impact!`,
          location: {
            latitude: initiative.location.latitude + (Math.random() * 0.01 - 0.005),
            longitude: initiative.location.longitude + (Math.random() * 0.01 - 0.005),
            address: initiative.location.address,
          },
          date: eventDate,
          startTime: `${10 + Math.floor(Math.random() * 8)}:00`,
          endTime: `${14 + Math.floor(Math.random() * 8)}:00`,
          attendees: attendees,
          maxAttendees: 50 + Math.floor(Math.random() * 50),
          createdAt: new Date(initiative.createdAt.getTime() + 86400000),
          updatedAt: new Date(),
        };
        
        events.push(event);
      }
    }
  });
  
  return events;
};

export const generateComments = (initiatives: Initiative[]): Comment[] => {
  const comments: Comment[] = [];
  const commentTexts = [
    "Great initiative for Jaipur! I'm excited to participate.",
    "This will really help make our Pink City greener.",
    "When will this start? I'd love to get involved.",
    "This is exactly what Jaipur needs!",
    "I'd like to volunteer for this project.",
    "Have you coordinated with JMC for this?",
    "Looking forward to seeing how this develops.",
    "Can you provide more details about the funding?",
    "I've participated in similar initiatives before - they make a real difference!",
    "How can local businesses in Jaipur get involved in this?"
  ];
  
  initiatives.forEach(initiative => {
    const numComments = Math.floor(Math.random() * 6);
    
    for (let i = 0; i < numComments; i++) {
      const userIndex = Math.floor(Math.random() * users.length);
      const commentDate = new Date(initiative.createdAt.getTime() + Math.random() * (Date.now() - initiative.createdAt.getTime()));
      
      const comment: Comment = {
        id: `c${initiative.id}${i}`,
        initiativeId: initiative.id,
        userId: users[userIndex].id,
        userName: users[userIndex].name,
        userRole: users[userIndex].role,
        userAvatar: users[userIndex].avatar,
        content: commentTexts[Math.floor(Math.random() * commentTexts.length)],
        createdAt: commentDate,
      };
      
      comments.push(comment);
    }
  });
  
  return comments;
};

export const initiatives = generateInitiatives();
export const events = generateEvents(initiatives);
export const comments = generateComments(initiatives);

export const impactMetrics = {
  treesPlanted: 1542,
  carbonReduced: 358,
  wasteRecycled: 4721,
  volunteerHours: 2845,
  energySaved: 1285,
  waterSaved: 9876,
};

export const leaderboard = users
  .map(user => ({
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    role: user.role,
    points: user.points,
    badges: user.badges.length,
  }))
  .sort((a, b) => b.points - a.points);

export const getCategoryColor = (category: InitiativeCategory): string => {
  const colors: Record<InitiativeCategory, string> = {
    'clean_energy': '#22c55e',
    'waste_management': '#a16207',
    'green_spaces': '#15803d',
    'sustainable_transport': '#3b82f6',
    'water_conservation': '#0ea5e9',
    'biodiversity': '#84cc16',
    'education': '#8b5cf6',
    'community': '#f59e0b',
    'other': '#64748b',
  };
  
  return colors[category] || '#64748b';
};

export const categoryIcons: Record<InitiativeCategory, string> = {
  'clean_energy': 'sun',
  'waste_management': 'recycle',
  'green_spaces': 'tree',
  'sustainable_transport': 'bus',
  'water_conservation': 'droplets',
  'biodiversity': 'flower',
  'education': 'book-open',
  'community': 'users',
  'other': 'tag',
};

export { badges }