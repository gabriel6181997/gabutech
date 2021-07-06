export type Blog = {
  category?: {
    createdAt: string;
    id: string;
    name: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  };
  content: string;
  createdAt: string;
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  updatedAt: string;
};

export type Blogs = {
  contents: Blog[];
}
