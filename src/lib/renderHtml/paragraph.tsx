import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
};

const Component: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => <p className={className}>{children}</p>;

const StyledComponent = styled(Component)`
  line-height: 1.7;
  letter-spacing: 0.05em;
  padding: 16px;
`;

export const Paragraph = StyledComponent;
