export type Blog = {
  category?: {
    createdAt: string;
    id: string;
    name: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  };
  image: {
    url: string;
    height: number;
    width: number;
  }
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
      firstviewimage: {
        height: number;
        url: string;
        width: number;
      };
      selfportrait: {
        height: number;
        url: string;
        width: number;
      };
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
      thumbnail: {
        height: number;
        url: string;
        width: number;
      };
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
