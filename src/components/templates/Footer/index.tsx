import styled from 'styled-components';

export type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({
  className,
}): JSX.Element => {
  return (
    <footer className={className}>
      <div className="footer-terms-list">
        <ul>
          <li>利用規約</li>
          <li>プライバシーポリシー</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
      <p className="footer-copywrite">
        {' '}
        <small>
          &copy;2020 History Tube createdBy YoheiNozaki
        </small>
      </p>
    </footer>
  );
};

const StyledFooter = styled(Component)`
  &
`;

export const Footer: React.FC = (props) => {
  const { children } = props;

  return <StyledFooter>{children}</StyledFooter>;
};
