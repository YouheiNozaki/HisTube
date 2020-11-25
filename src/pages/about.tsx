import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Layout } from 'components/templates/layout';
import { Button } from 'components/atoms/Button';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <article className={className}>
        <section className="main">
          <h1 className="main-title">
            動画で歴史を楽しく
            <span className="main-title-span">
              スキマ時間に。
            </span>
            <span className="main-title-span">
              効率よく。
            </span>
          </h1>
          <Image
            src="/main.svg"
            alt="サイトのメイン画像"
            width={500}
            height={400}
            className="main-image"
          />
        </section>
        <section className="main-link">
          <h2 className="main-link-heading">
            さあ、はじめよう！！
          </h2>
          <Link href="/">
            <a href="/">
              <Button
                text="動画一覧を見る"
                className="main-link-button"
              />
            </a>
          </Link>
        </section>
        <section className="main-intro">
          <h3 className="main-intro-heading">
            このサイトを作った人
          </h3>
          <div className="main-intro-image">
            <Image
              src="/cat.png"
              alt="自己紹介画像"
              width={120}
              height={120}
              className="main-intro-image-child"
            />
          </div>
          <div className="main-intro-paragraph">
            <p>野崎洋平</p>
            <p>埼玉県立○○高校地歴科教員</p>
            <p>文学部史学科卒。</p>
            <p>
              愛猫と愛犬が大好き。最近はプログラミングを勉強している。
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

const StyledComponent = styled(Component)`
  margin: 16px;
  & .main-title {
    margin-top: 32px;
    font-size: ${(props) => props.theme.fontSizes['4xl']};
    color: ${(props) => props.theme.colors.purple[900]};
  }
  & .main-title-span {
    display: block;
    margin-top: 8px;
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    font-weight: ${(props) =>
      props.theme.fontWeights.semibold};
    color: ${(props) => props.theme.colors.purple[600]};
  }
  & .main-link {
    margin: 40px 0px;
    text-align: center;
  }
  & .main-link-heading {
    color: ${(props) => props.theme.colors.purple[900]};
    font-weight: ${(props) =>
      props.theme.fontWeights.semibold};
  }
  & .main-link-button {
    padding: 12px 20px;
  }
  & .main-intro {
    margin: 40px auto 0;
    text-align: center;
  }
  & .main-intro-heading {
    color: ${(props) => props.theme.colors.purple[900]};
    font-weight: ${(props) =>
      props.theme.fontWeights.semibold};
  }
  & .main-intro-image {
    margin: 40px auto;
    width: 120px;
    height: 120px;
  }
  & .main-intro-image-child {
    border: solid 4px
      ${(props) => props.theme.colors.purple[900]};
    border-radius: 50%;
    box-shadow: ${(props) => props.theme.shadows.xl};
  }
  & .main-intro-paragraph {
    color: ${(props) => props.theme.colors.blackAlpha[900]};
  }
`;

const About: React.FC = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};

export default About;
