import { cheatsheets } from "#velite";

export type Cheatsheet = {
  slug: string; 
  title: string;
  excerpt?: string;
  category?: string;
  language?: string;
  date: string; 
  readTime?: string;
  tags: string[];
  content: string;
};


export async function getCheatsheets(): Promise<Cheatsheet[]> {
  try {
    const sorted = cheatsheets
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((item) => ({
        slug: item.slugAsParams,
        title: item.title,
        excerpt: item.excerpt,
        category: item.category,
        language: item.language,
        date: item.date,
        readTime: item.readTime,
        tags: item.tags || [],
        content: item.body,
      }));

    return sorted;
  } catch (error) {
    console.error("Failed to load cheatsheets:", error);
    return [];
  }
}


export async function getCheatsheet(slug: string): Promise<Cheatsheet | null> {
  try {
    const item = cheatsheets.find((c: { slugAsParams: string; }) => c.slugAsParams === slug);
    if (!item) return null;

    return {
      slug: item.slugAsParams,
      title: item.title,
      excerpt: item.excerpt,
      category: item.category,
      language: item.language,
      date: item.date,
      readTime: item.readTime,
      tags: item.tags || [],
      content: item.body,
    };
  } catch (error) {
    console.error(`Failed to load cheatsheet: ${slug}`, error);
    return null;
  }
}
