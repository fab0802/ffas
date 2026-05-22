import type { NewsCategory } from "./newsCategory";

export type NewsItem = {
  slug: string;
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
  featured?: boolean;
};
