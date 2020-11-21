import styled from 'styled-components';

export type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({
  className,
}): JSX.Element => {
  return <footer className={className}>Footer</footer>;
};

const StyledFooter = styled(Component)``;

export const Footer: React.FC = (props) => {
  const { children } = props;

  return <StyledFooter>{children}</StyledFooter>;
};
