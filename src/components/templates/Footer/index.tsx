import Link from 'next/link';
import styled from 'styled-components';

export type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({
  className,
}): JSX.Element => {
  return (
    <footer className={className}>
      <div>
        <ul className="footer-terms-list">
          <Link href="/terms">
            <a href="/terms">
              <li>利用規約</li>
            </a>
          </Link>
          <Link href="/privacy">
            <a href="/privacy">
              <li>プライバシーポリシー</li>
            </a>
          </Link>
        </ul>
      </div>
      <p className="footer-copywrite">
        {' '}
        <small>&copy;2020 History Tube</small>
      </p>
    </footer>
  );
};

const StyledFooter = styled(Component)`
  margin: 40px 20px;
  display: flex;
  flex-direction: column;
  & .footer-terms-list {
    display: flex;
    justify-content: center;
    padding: 16px;
  }
  & .footer-terms-list > a {
    text-decoration: none;
    margin: 16px;
  }
  & .footer-terms-list > a > li {
    list-style: none;
    color: ${(props) => props.theme.colors.gray[600]};
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
  & .footer-terms-list > a > li:hover {
    color: ${(props) => props.theme.colors.gray[900]};
    cursor: pointer;
  }
  & .footer-copywrite {
    margin: 0 auto 20px;
    color: ${(props) => props.theme.colors.gray[500]};
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

export const Footer: React.FC = (props) => {
  const { children } = props;

  return <StyledFooter>{children}</StyledFooter>;
};
