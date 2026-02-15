/**
 * Types partagés pour les projets et liens du site.
 */

export type ProjectCategory = 'pro' | 'side';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  links?: ProjectLink[];
  image?: ImageRef;
}

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  image?: ImageRef;
}
