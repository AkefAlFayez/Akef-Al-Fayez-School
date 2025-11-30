
export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  content: string;
  imageUrl: string;
  images?: string[];
  tags?: string[];
  facebookUrl?: string;
}

export interface ScheduleItem {
  period: string;
  time: string;
  description: string;
}

export interface Teacher {
  name: string;
  role: string;
  image?: string;
}
