import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
};

const Component: React.FC<Props> = ({ className, text }): JSX.Element => {
  return (
    <button className={className} type="button">
      {text}
    </button>
  );
};

const StyledComponent = styled(Component)`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.purple[600]};
  text-decoration: none;
  /* padding: 8px 16px; */
  border-radius: 4px;
  border-bottom: solid 4px ${(props) => props.theme.colors.blackAlpha[50]};
  :hover {
    cursor: pointer;
  }
  :active {
    transform: translateY(4px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    border-bottom: none;
  }
`;

export const Button = StyledComponent;
