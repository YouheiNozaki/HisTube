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
              width={40}
              height={40}
            />
          </a>
        </Link>
        <p className="header-title">History Tube</p>
      </div>
    </header>
  );
};

const StyledComponent: React.FC = styled(Component)`
  position: sticky;
  top: 0;
  z-index: 10;
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
  }
  & .header-title {
    color: ${(props) => props.theme.colors.purple[700]};
    font-size: 28px;
    font-weight: ${(props) =>
      props.theme.fontWeights.extrabold};
    margin: 8px;
  }
`;

export const Header = StyledComponent;
