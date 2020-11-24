import styled from 'styled-components';

import { EffectLink } from 'components/atoms/EffectLink';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({
  className,
}): JSX.Element => {
  return (
    <nav className={className}>
      <EffectLink text="一覧" url="/" />
      <EffectLink text="世界史" url="/" />
      <EffectLink text="サイトについて" url="/about" />
    </nav>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
  & a {
    white-space: nowrap;
    width: 100%;
    padding-left: 8px;
  }
`;

export const Nav: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};
