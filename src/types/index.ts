export interface IProject {
  [key: string]: any;
  slug: string;
  readingTime: string;
  seoTitle?: string;
  techStack?: string[];
  excerpt?: string;
  title?: string;
  coverImg?: string;
  publishedAt?: string;
  githubRepoUrl?: string;
}

export interface IProjectSlug {
  slug: string,
  publishedAt: string;
}


export interface INavLink {
  key?: string;
  name: string;
  href: string;
  scroll?: boolean;
}

export interface IPageHeader {
  title: string;
  description: string;
}