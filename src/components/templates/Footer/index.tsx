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
        {/* {' '}
        <small>&copy;2020 History Tube</small> */}
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc/4.0/"
          className="footer-copywrite-image"
        >
          <img
            alt="クリエイティブ・コモンズ・ライセンス"
            src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
          />
        </a>
        <br />
        <div>
          この サイトの作品 は{' '}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            クリエイティブ・コモンズ 表示 - 非営利 4.0 国際
            ライセンス
          </a>
          の下に提供されています。
          <br />
          各ページのYouTube
          動画については著作権は製作者に帰属します。
        </div>
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
    display: flex;
    flex-direction: column;
    margin: 0 auto 20px;
    color: ${(props) => props.theme.colors.gray[500]};
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
  & .footer-copywrite-image {
    margin: 0 auto;
  }
`;

export const Footer: React.FC = (props) => {
  const { children } = props;

  return <StyledFooter>{children}</StyledFooter>;
};
