import styled from 'styled-components';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => (
  <div className={className}>
    <iframe {...children} title="タイトル動画" />
  </div>
);

const StyledComponent = styled(Component)`
  position: relative;
  ::before {
    content: '';
    display: inline-block;
    padding-top: 56.25%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Iframe = StyledComponent;
