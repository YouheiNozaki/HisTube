export type PostTag = {
  id: string;
  name: string;
};

export type ContentType = {
  fieldId: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;
  video?: string;
  sentence?: string;
  image?: {
    url?: string;
  };
};

export type PostType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  image?: {
    url: string;
  };
  tag: PostTag[];
  content?: ContentType[];
};

export type PostsType = {
  contents: PostType[];
};
