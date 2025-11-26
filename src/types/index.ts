export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Styling';
  imageUrl: string;
  description: string;
  year: string;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl?: string;
}
