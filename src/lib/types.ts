export type TJob = {
  id: number;
  title: string;
  badgeLetters: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
};

export type TJobItem = {
  badgeLetter: string;
  company: string;
  companyURL: string;
  coverImage: string;
  daysAgo: number;
  description: string;
  duration: string;
  id: number;
  location: string;
  qualifications: string[];
  relevanceScore: number;
  reviews: string[];
  salary: string;
  title: string;
};
