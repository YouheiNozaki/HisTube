import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useRouter } from 'next/dist/client/router';

import { http, request } from 'lib/fetch';
import { Layout } from 'components/templates/layout';
import { Sentence } from 'components/templates/Sentence';
import type { PostsType, PostType } from 'types/post';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await http<PostsType>(request);

  return {
    paths: posts.contents.map((post) => {
      return {
        params: {
          id: post.id,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  post: PostType;
}> = async (
  context: GetStaticPropsContext<{ id: string }>,
) => {
  const { id } = context.params;
  const post = await http<PostType>(
    `https://education-video.microcms.io/api/v1/posts/${id}`,
    {
      headers: {
        'X-API-KEY': `${process.env.X_API_KEY}`,
      },
    },
  );

  return {
    props: {
      post,
    },
  };
};

const PostDatail = ({
  post,
}: InferGetStaticPropsType<
  typeof getStaticProps
>): React.ReactNode => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Sentence content={post.content} />
    </Layout>
  );
};

export default PostDatail;
