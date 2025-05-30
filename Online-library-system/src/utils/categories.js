import {
  BookOpen,
  Heart,
  Landmark,
  Eye,
  Ghost,
  Mic,
  Brain,
  Skull,
  Library,
} from 'lucide-react';

const categories = [
  { name: 'Fiction', icon: BookOpen },
  { name: 'Romance', icon: Heart },
  { name: 'Historical', icon: Landmark },
  { name: 'Thriller', icon: Eye },
  { name: 'Gothic', icon: Ghost },
  { name: 'Drama', icon: Mic },        // 🔄 Replaced invalid Theatre with Mic
  { name: 'Philosophy', icon: Brain },
  { name: 'Tragedy', icon: Skull },
  { name: 'Classic', icon: Library },
];

export default categories;
