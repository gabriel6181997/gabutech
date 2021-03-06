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
  tags?: Tag[];
  image: Image;
  content: string;
  createdAt: string;
  id: string;
  isWork: boolean;
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
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  aboutdescription: string;
  catchcopy: string;
  fieldId: string;
  firstviewimage: Image;
  selfportrait: Image;
  title: string;
  githublink: string;
  twitterlink: string;
};

export type AboutType = {
  conclusion: string;
  fieldId: string;
  history: History[];
  shortdescription: string;
  skill: string;
  thumbnail: Image;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
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

export type Tags = {
  contents: Tag[];
  limit: number;
  offset: number;
  totalCount: number;
};

export type Tag = {
  createdAt: string;
  id: string;
  publishedAt: string;
  revisedAt: string;
  tagName: string;
  updatedAt: string;
};

export type ProfileCard = {
  createdAt: string;
  github: string;
  profileimage: Image;
  publishedAt: string;
  revisedAt: string;
  twitter: string;
  updatedAt: string;
};

export type PrivacyType = {
  content: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type DisclaimerType = {
  content: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type DateInfo = {
  contents: DateInfoContent[];
  limit: number;
  offset: number;
  totalCount: number;
};

export type DateInfoContent = {
  id: string;
  publishedAt: string;
};

export type Work = {
  content: string;
  createdAt: string;
  id: string;
  isWork: boolean;
  image: Image;
  publishedAt: string;
  revisedAt: string;
  tags?: Tag[];
  title: string;
  updatedAt: string;
};

export type Works = {
  contents: Work[];
  limit: number;
  offset: number;
  totalCount: number;
};
