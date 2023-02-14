export interface IProject {
  [key: string]: any;
  slug: string;
  readingTime: string;
  seoTitle?: string;
  techStack?: string[];
  excerpt?: string;
  title?: string;
  publishedAt?: string;
}

export interface INavLink {
  key?: string;
  name: string;
  href: string;
}