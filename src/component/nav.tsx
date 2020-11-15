import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'theme';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }): JSX.Element => {
  return (
    <div className={className}>
      <Link href="/posts">
        <a href="/posts">一覧</a>
      </Link>
      <Link href="/posts">
        <a href="/posts">世界史</a>
      </Link>
      <Link href="/posts">
        <a href="/posts">日本史</a>
      </Link>
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-around;
  & a {
    color: ${theme.colors.purple[700]};
    font-weight: ${theme.fontWeights.medium};
    margin: 4px;
    text-decoration: none;
  }
`;

export const Nav: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};
