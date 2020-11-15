import Link from 'next/link';
import Image from 'next/image';
import { theme } from 'theme';

import styled from 'styled-components';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }): JSX.Element => {
  return (
    <header className={className}>
      <div className="header-logo">
        <Link href="/">
          <a href="/">
            <Image src="/logo.png" alt="サイトのロゴ" width={200} height={70} />
          </a>
        </Link>
      </div>
    </header>
  );
};

const StyledHeader = styled(Component)`
  border-bottom: solid 1px ${theme.colors.gray[200]};
  /* box-shadow: 0 1px 0 ${theme.colors.blackAlpha[100]}; */
  box-shadow: ${theme.shadows.none};
  & .header-logo {
    margin: 6px;
  }
`;

export const Header: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledHeader>{children}</StyledHeader>;
};
