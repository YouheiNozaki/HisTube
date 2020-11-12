import Link from 'next/link';
import Image from 'next/image';

import { Nav } from 'component/nav';
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
      <Nav />
    </header>
  );
};

const StyledHeader = styled(Component)`
  & .header-logo {
    margin: 6px;
  }
`;

export const ContainerHeader: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledHeader {...props}>{children}</StyledHeader>;
};
