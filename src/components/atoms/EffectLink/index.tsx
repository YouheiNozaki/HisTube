import styled from 'styled-components';
import Link from 'next/link';

type Props = {
  className?: string;
  text: string;
  url: string;
};

const Component: React.FC<Props> = ({
  className,
  text,
  url,
}): JSX.Element => {
  return (
    <Link href={url}>
      <a className={className} href={url}>
        {text}
      </a>
    </Link>
  );
};

const StyledComponent = styled(Component)`
  color: ${(props) => props.theme.colors.purple[700]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 8px;
  text-decoration: none;
  box-shadow: inset
    ${(props) => props.theme.colors.purple[400]} 0 0 0 0;
  transition: 0.5s;
  :hover {
    color: #fff;
    box-shadow: inset
      ${(props) => props.theme.colors.purple[400]} 0 0 0 2em;
  }
  :active {
    color: #fff;
    box-shadow: inset
      ${(props) => props.theme.colors.purple[400]} 0 0 0 2em;
  }
`;

export const EffectLink = StyledComponent;
