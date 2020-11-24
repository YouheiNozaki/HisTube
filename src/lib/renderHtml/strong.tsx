import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
};

const Component: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => {
  return <strong className={className}>{children}</strong>;
};

const StyledComponent = styled(Component)`
  background: linear-gradient(
    transparent 70%,
    ${(props) => props.theme.colors.pink[200]} 70%
  );
`;

export const Strong = StyledComponent;
