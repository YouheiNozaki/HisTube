import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { http, request } from 'lib/fetch';
import { Layout } from 'components/layout';

import type { TermType, TermsType } from 'types/terms';

type Props = {
  posts: TermType[];
  className?: string;
};

export const getStaticProps: GetStaticProps<{
  posts: TermType[];
}> = async () => {
  const posts = await http<TermsType>(request);

  return {
    props: {
      posts: posts.body,
    },
  };
};

const Component: React.FC<Props> = ({
  // posts,
  className,
}) => {
  return (
    <Layout>
      <div className={className}>Hello</div>
    </Layout>
  );
};

const StyledComponent = styled(Component)``;

const Terms: React.FC<Props> = (props) => {
  const { children, posts } = props;

  return (
    <StyledComponent posts={posts}>
      {children}
    </StyledComponent>
  );
};

export default Terms;
