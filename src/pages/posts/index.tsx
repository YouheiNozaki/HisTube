import {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { http, request } from 'lib/fetch';
import { Layout } from 'components/layout';
import { Card } from 'components/atoms/Card';

import type { ContentType, PostType } from 'types/post';

export const getStaticProps: GetStaticProps<{
  posts: PostType[];
}> = async () => {
  const posts = await http<ContentType>(request);

  return {
    props: {
      posts: posts.contents,
    },
  };
};

const Post = ({
  posts,
}: InferGetStaticPropsType<
  typeof getStaticProps
>): React.ReactNode => {
  return (
    <Layout>
      <h1>動画一覧ページ</h1>
      {posts.map((post) => {
        return (
          <Card
            id={`posts/${post.id}`}
            title={post.title}
            tag={post.tag}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            video={post.video}
          />
        );
      })}
    </Layout>
  );
};

export default Post;
