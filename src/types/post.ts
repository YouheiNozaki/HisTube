export type PostTag = {
  id: string;
  name: string;
};

export type PostType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  video: string;
  tag: PostTag;
  content?: string;
};

export type ContentType = {
  contents: PostType[];
};
