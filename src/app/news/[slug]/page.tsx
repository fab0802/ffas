import { notFound } from "next/navigation";
import { getNewsBySlug, getNews } from "@/helpers";
import NewsArticleView from "@/components/sections/NewsArticleView";

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);
  if (!item) return { title: "Nicht gefunden · FFAS" };
  return {
    title: `${item.title} · FFAS`,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);
  if (!item) notFound();

  return <NewsArticleView item={item} />;
}
