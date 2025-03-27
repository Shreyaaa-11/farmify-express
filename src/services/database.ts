
// This is a mock database service that simulates database operations
// In a real application, this would connect to Supabase or another backend

export interface Equipment {
  id: string;
  name: string;
  description: string;
  price: number;
  rentalPrice: number;
  category: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

// Mock data
const equipmentData: Equipment[] = [
  {
    id: '1',
    name: 'John Deere 5050D Tractor',
    description: 'A powerful 50 HP tractor perfect for medium to large farms. Features a durable design and excellent fuel efficiency.',
    price: 780000,
    rentalPrice: 1200,
    category: 'tractors',
    image: '/lovable-uploads/fb2a6eac-1728-47ad-bbfe-3b0f60627495.png',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Mahindra 475 DI Tractor',
    description: '42 HP tractor with excellent performance for various farming applications. Comes with power steering and adjustable seat.',
    price: 650000,
    rentalPrice: 1000,
    category: 'tractors',
    image: '/lovable-uploads/fb2a6eac-1728-47ad-bbfe-3b0f60627495.png',
    inStock: true
  },
  {
    id: '3',
    name: 'Sonalika Disc Harrow',
    description: '16-disc heavy-duty harrow for effective soil preparation. Adjustable angle for different soil conditions.',
    price: 85000,
    rentalPrice: 500,
    category: 'tillageEquipment',
    image: '/lovable-uploads/79b698fb-fc19-494d-b398-4770d1bd0f11.png',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'VST Shakti Power Weeder',
    description: 'Efficient power weeder for weed control in row crops. Reduces labor costs and improves crop yield.',
    price: 45000,
    rentalPrice: 300,
    category: 'tillageEquipment',
    image: '/lovable-uploads/79b698fb-fc19-494d-b398-4770d1bd0f11.png',
    inStock: true
  },
  {
    id: '5',
    name: 'Kubota Rice Transplanter',
    description: '4-row rice transplanter with high accuracy and speed. Perfect for small to medium rice farms.',
    price: 250000,
    rentalPrice: 1500,
    category: 'seedingEquipment',
    image: '/lovable-uploads/085190d0-91b4-4f9c-8670-0d32aba37dc2.png',
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Kisan Kraft Seed Drill',
    description: 'Multi-crop seed drill suitable for various seeds. Ensures uniform seed placement and optimal germination.',
    price: 70000,
    rentalPrice: 600,
    category: 'seedingEquipment',
    image: '/lovable-uploads/085190d0-91b4-4f9c-8670-0d32aba37dc2.png',
    inStock: true
  },
  {
    id: '7',
    name: 'TAFE Riding Lawn Mower',
    description: 'Efficient riding mower for landscape maintenance. Features adjustable cutting height and comfortable seat.',
    price: 120000,
    rentalPrice: 800,
    category: 'landscapeEquipment',
    image: '/lovable-uploads/5da313d0-221b-4fde-b53b-145691f7b01c.png',
    inStock: true
  },
  {
    id: '8',
    name: 'Honda Brush Cutter',
    description: 'Powerful brush cutter for clearing tough vegetation. Comes with multiple attachments for versatile use.',
    price: 18000,
    rentalPrice: 200,
    category: 'landscapeEquipment',
    image: '/lovable-uploads/5da313d0-221b-4fde-b53b-145691f7b01c.png',
    inStock: true,
    featured: true
  },
  {
    id: '9',
    name: 'Aspee Tractor Sprayer',
    description: 'High-capacity tractor-mounted sprayer for efficient pest control. Features adjustable nozzles and pressure control.',
    price: 45000,
    rentalPrice: 400,
    category: 'cropProtection',
    image: '/lovable-uploads/085190d0-91b4-4f9c-8670-0d32aba37dc2.png',
    inStock: true
  },
  {
    id: '10',
    name: 'Tirth Agro Rotavator',
    description: 'Heavy-duty rotavator for effective soil preparation. Suitable for various soil types and conditions.',
    price: 95000,
    rentalPrice: 700,
    category: 'tillageEquipment',
    image: '/lovable-uploads/79b698fb-fc19-494d-b398-4770d1bd0f11.png',
    inStock: true
  },
  {
    id: '11',
    name: 'Claas Crop Tiger Harvester',
    description: 'Compact and efficient combine harvester for wheat, rice, and other crops. Reduces harvest time significantly.',
    price: 1500000,
    rentalPrice: 3000,
    category: 'harvestEquipment',
    image: '/lovable-uploads/085190d0-91b4-4f9c-8670-0d32aba37dc2.png',
    inStock: true,
    featured: true
  },
  {
    id: '12',
    name: 'Kartar Tractor Trailer',
    description: 'Durable hydraulic trailer for efficient transport of farm produce. Features tipping mechanism for easy unloading.',
    price: 120000,
    rentalPrice: 500,
    category: 'haulage',
    image: '/lovable-uploads/079b698fb-fc19-494d-b398-4770d1bd0f11.png',
    inStock: true
  }
];

const users: User[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '9876543210',
    address: 'Bangalore, Karnataka'
  },
  {
    id: '2',
    name: 'Sunita Patil',
    email: 'sunita@example.com',
    phone: '8765432109',
    address: 'Mysore, Karnataka'
  }
];

// Equipment API
export const getEquipment = (): Promise<Equipment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(equipmentData);
    }, 500);
  });
};

export const getEquipmentById = (id: string): Promise<Equipment | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const equipment = equipmentData.find(item => item.id === id);
      resolve(equipment);
    }, 300);
  });
};

export const getEquipmentByCategory = (category: string): Promise<Equipment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredEquipment = equipmentData.filter(item => item.category === category);
      resolve(filteredEquipment);
    }, 300);
  });
};

export const getFeaturedEquipment = (): Promise<Equipment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const featuredEquipment = equipmentData.filter(item => item.featured);
      resolve(featuredEquipment);
    }, 300);
  });
};

// User API
export const getUserById = (id: string): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);
      resolve(user);
    }, 300);
  });
};

// For a real app, you would add more methods to handle:
// - Creating, updating, deleting equipment
// - User management
// - Order processing
// - Payment handling
// - etc.
