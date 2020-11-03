export type PostTag = {
  id: string;
  name: string;
};

export type Post = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  video: string;
  tag: PostTag;
  content: string;
};
