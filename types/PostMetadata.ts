export type PostMetadata = {
  id: string;
  title: string;
  publishedAt: string;
  coverUrl?: string;
  body: string;
  tags?: string[];
  description?: string;
  theme?: string;
  series?: string;
  category?: { name: string };
};
