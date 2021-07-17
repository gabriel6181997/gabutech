export type Image = {
  url: string;
  height: number;
  width: number;
};

export type Blog = {
  category?: {
    createdAt: string;
    id: string;
    name: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  };
  image: Image;
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
  limit: number;
  offset: number;
  totalCount: number;
};

export type Top = {
  top: {
    createdAt: string;
    publishedAt: string;
    revisedAt: string;
    top: {
      aboutdescription: string;
      catchcopy: string;
      fieldId: string;
      firstviewimage: Image;
      selfportrait: Image;
      title: string;
    };
  };
};

export type AboutType = {
  about: {
    about: {
      conclusion: string;
      fieldId: string;
      history: History[];
      shortdescription: string;
      skill: string;
      thumbnail: Image
    };
    createdAt: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  };
};

export type History = {
  description: string;
  fieldId: string;
  month?: string;
  title: string;
  year: string;
};

export type TableOfContent = {
  id: string;
  level: string;
  text: string;
};

export type TableOfContentsType = TableOfContent[];


