import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';

import { http, request } from 'lib/fetch';
import { renderAst } from 'lib/renderHtml';
import { Layout } from 'component/layout';

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
    <Layout>
      <h1>動画一覧ページ</h1>
      {posts.map((post) => {
        return (
          <Fragment key={post.id}>
            <Link href={`posts/${post.id}`}>
              <a href={`posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{dayjs(post.createdAt).format(`YYYY/MM/DD`)}</p>
                <p>{dayjs(post.updatedAt).format('YYYY/MM/DD')}</p>
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
                <div>{renderAst(post.video)}</div>
              </a>
            </Link>
          </Fragment>
        );
      })}
    </Layout>
  );
};

export default Post;
