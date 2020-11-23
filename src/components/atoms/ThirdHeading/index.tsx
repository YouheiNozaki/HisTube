import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
};

const Component: React.FC<Props> = ({
  className,
  text,
}): JSX.Element => {
  return <h3 className={className}>{text}</h3>;
};

const StyledComponent = styled(Component)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.purple[800]};
  padding: 4px;
  border-bottom: solid 1px
    ${(props) => props.theme.colors.gray[200]};
`;

export const ThirdHeading = StyledComponent;
