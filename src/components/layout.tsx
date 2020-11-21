import { Nav } from 'components/nav';
import { Header } from 'components/templates/Header';
import { Footer } from 'components/templates/Footer';
import styled from 'styled-components';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Component: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => {
  return (
    <div className={className}>
      <Header />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

const StyledLayout = styled(Component)`
  margin: 4px;
`;

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledLayout>{children}</StyledLayout>;
};
