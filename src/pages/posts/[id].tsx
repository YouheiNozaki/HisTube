/* eslint-disable react/no-danger */
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import type { ContentType, PostType } from 'types/post';
import { http, request } from 'lib/fetch';

import { Header } from 'component/header';
import { useRouter } from 'next/dist/client/router';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await http<ContentType>(request);

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

export const getStaticProps: GetStaticProps<{ post: PostType }> = async (
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
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div>
        <h1>{post.title}</h1>
        <p>{post.tag.name}</p>
        <p>{post.createdAt}</p>
        <p>{post.updatedAt}</p>
        <div dangerouslySetInnerHTML={{ __html: `${post.video}` }} />
        <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
      </div>
    </>
  );
};

export default PostDatail;
