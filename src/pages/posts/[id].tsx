import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';

import { http, request } from 'lib/fetch';
import { Layout } from 'components/templates/layout';
import { Sentence } from 'components/templates/Sentence';
import { HeadTemplate } from 'components/templates/Head';
import type { PostsType, PostType } from 'types/post';
import { Heading } from 'components/atoms';

type Props = {
  post: PostType;
  className?: string;
};

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

const Component: React.FC<Props> = ({
  post,
  className,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <HeadTemplate />
      <div className={className}>
        <Heading text={post.title} />
        <Sentence content={post.content} />
      </div>
    </Layout>
  );
};

const StyledComponent = styled(Component)`
  margin: 16px auto;
  padding: 16px;
  max-width: 1024px;
`;

const PostDatail: React.FC<Props> = (props) => {
  const { children, post } = props;

  return (
    <StyledComponent post={post}>
      {children}
    </StyledComponent>
  );
};

export default PostDatail;
