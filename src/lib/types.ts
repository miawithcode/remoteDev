export type TJob = {
  id: number;
  title: string;
  badgeLetters: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
};

export type TJobItem = TJob & {
  companyURL: string;
  coverImage: string;
  description: string;
  duration: string;
  location: string;
  qualifications: string[];
  reviews: string[];
  salary: string;
};

export type TSortBy = "relevant" | "recent";

export type TPageDirection = "next" | "previous";
