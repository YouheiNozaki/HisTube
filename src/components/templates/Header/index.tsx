import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

export type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <div className="header-logo">
        <Link href="/">
          <a href="/">
            <Image
              src="/logo.png"
              alt="サイトのロゴ"
              width={140}
              height={40}
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

const StyledComponent: React.FC = styled(Component)`
  position: sticky;
  top: 0;
  z-index: ${(props) => props.theme.zIndices.header};
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  padding: 8px;
  border-bottom: solid 1px
    ${(props) => props.theme.colors.gray[400]};
  box-shadow: ${(props) => props.theme.shadows.none};
  & .header-logo {
    display: flex;
    align-items: center;
    margin: 4px;
    padding: 4px;
    @media (min-width: 560px) {
      padding: 8px;
    }
  }
`;

export const Header = StyledComponent;
