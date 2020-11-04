/* eslint-disable react/no-danger */
import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { ContentType, PostType } from 'types/post';
import { http, request } from 'lib/fetch';

import { Header } from 'component/header';
import Link from 'next/link';

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
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode => {
  return (
    <div>
      <Header />
      <h1>動画一覧ページ</h1>
      {posts.map((post) => {
        return (
          <Fragment key={post.tag.id}>
            <h2>{post.title}</h2>
            <p>{post.createdAt}</p>
            <p>{post.updatedAt}</p>
            <div dangerouslySetInnerHTML={{ __html: `${post.video}` }} />
            <Link href={`posts/${post.id}`}>
              <a href={`posts/${post.id}`}>詳しく見る</a>
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Post;