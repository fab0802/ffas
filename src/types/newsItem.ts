import type { NewsCategory } from "./newsCategory";
import type { NewsImage } from "./newsImage";

export type NewsItem = {
  slug: string;
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  content?: string;
  imageUrl?: string;
  additionalImages?: NewsImage[];
  authorSlug?: string;
  authorText?: string;
  teamSlugs?: string[];
};
