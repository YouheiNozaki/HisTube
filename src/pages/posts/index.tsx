/* eslint-disable react/no-danger */
import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
// import unified from 'unified';
// import parse from 'rehype-parse';

import { http, request } from 'lib/fetch';
// import { renderAst } from 'lib/renderHtml';
import { Header } from 'component/header';

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
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode => {
  return (
    <div>
      <Header />
      <h1>動画一覧ページ</h1>
      {posts.map((post) => {
        return (
          <Fragment key={post.id}>
            <Link href={`posts/${post.id}`}>
              <a href={`posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{dayjs(post.createdAt).format(`YYYY/MM/DD`)}</p>
                <p>{dayjs(post.updatedAt).format('YYYY/MM/DD')}</p>
                <div dangerouslySetInnerHTML={{ __html: `${post.video}` }} />
              </a>
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Post;
