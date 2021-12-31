export type PostMetadata = {
  id: string;
  title: string;
  publishedAt: string;
  coveredImage?: { width: number; height: number; url: string };
  body: string;
  tags?: string[];
  description?: string;
  theme?: string;
  series?: string;
  category?: { name: string };
};
