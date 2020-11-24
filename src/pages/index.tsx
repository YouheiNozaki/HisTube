import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { http, request } from 'lib/fetch';
import { Layout } from 'components/layout';
import { Card } from 'components/atoms/Card';
import { Heading } from 'components/atoms/Heading';

import type { PostsType, PostType } from 'types/post';

type Props = {
  posts: PostType[];
  className?: string;
};

export const getStaticProps: GetStaticProps<{
  posts: PostType[];
}> = async () => {
  const posts = await http<PostsType>(request);

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
  margin: 8px;
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
