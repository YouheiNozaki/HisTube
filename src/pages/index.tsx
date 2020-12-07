import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { http } from 'lib/fetch';
import { Layout } from 'components/templates/layout';
import { Card } from 'components/templates/Card';
import { Heading } from 'components/atoms/Heading';
import { HeadTemplate } from 'components/templates/Head';

import type { PostsType, PostType } from 'types/post';

type Props = {
  posts: PostType[];
  className?: string;
};

export const getStaticProps: GetStaticProps<{
  posts: PostType[];
}> = async () => {
  // とりあえずlimitを増やす対応
  const limit = 20;
  const posts = await http<PostsType>(
    `https://education-video.microcms.io/api/v1/posts?limit=${limit}`,
    {
      headers: {
        'X-API-KEY': `${process.env.X_API_KEY}`,
      },
    },
  );
  // const { totalCount } = res;
  // const limit = 6;

  // const posts = await http<PostsType>(
  //   `https://education-video.microcms.io/api/v1/posts?limit=${limit}totalCount=${totalCount}`,
  //   {
  //     headers: {
  //       'X-API-KEY': `${process.env.X_API_KEY}`,
  //     },
  //   },
  // );

  return {
    props: {
      posts: posts.contents,
    },
  };
};

const Component: React.FC<Props> = ({
  posts,
  className,
}) => {
  return (
    <Layout>
      <HeadTemplate />
      <div className={className}>
        <div className="posts-heading">
          <Heading text="動画一覧" />
        </div>
        {posts.map((post) => {
          return (
            <Card
              id={`posts/${post.id}`}
              title={post.title}
              tag={post.tag}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
              url={post.image.url}
            />
          );
        })}
      </div>
    </Layout>
  );
};

const StyledComponent = styled(Component)`
  margin: 8px auto;
  padding: 8px;
  max-width: 1024px;
  & .posts-heading {
    margin-left: 16px;
  }
`;

const Post: React.FC<Props> = (props) => {
  const { children, posts } = props;

  return (
    <StyledComponent posts={posts}>
      {children}
    </StyledComponent>
  );
};

export default Post;
