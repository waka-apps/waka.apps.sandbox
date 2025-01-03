import type { Category } from "./category";
import type { Eyecatch } from "./eyecatch";

export type Post = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  content: string;
  eyecatch: Eyecatch;
  categories: Category[];
};
