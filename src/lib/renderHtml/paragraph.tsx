import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
};

const Component: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => {
  return <p className={className}>{children}</p>;
};

const StyledComponent = styled(Component)`
  line-height: 1.7;
  letter-spacing: 0.05em;
`;

export const Paragraph = StyledComponent;
