
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface ProjectBrief {
  title: string;
  concept: string;
  targetAudience: string;
  techStack: string[];
  timeline: string;
}
