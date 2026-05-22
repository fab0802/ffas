export type NewsItem = {
  slug: string;
  category: "Vereinsleben" | "Juniorinnen" | "Sponsoring" | "Spielbericht";
  date: string;
  title: string;
  excerpt: string;
  featured?: boolean;
};
