import blogsData from "./blogs.json";

export interface BlogContentBlock {
  type: string;
  text: string;
  id?: string;
}

export interface BlogPost {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  slug: string;
  description: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  content: BlogContentBlock[];
}

export const allBlogPosts: BlogPost[] = blogsData;
