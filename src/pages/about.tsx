import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Layout } from 'components/templates/layout';
import { HeadTemplate } from 'components/templates/Head';
import { Button } from 'components/atoms/Button';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <HeadTemplate />
      <article className={className}>
        <section className="main">
          <Image
            src="/mainlogo.png"
            alt="サイトのメインロゴ"
            width={450}
            height={350}
            className="main-image"
          />
          <div className="main-content">
            <h1 className="main-title">
              歴史教材をあなたのもとへ
              <span className="main-title-span">
                Histubeはどんな人でも歴史をテキスト、動画で無料で学べることを目指したサイトです
              </span>
              <span className="main-title-span">
                高校の地歴科教員が運営をしています
              </span>
            </h1>
          </div>
        </section>
        <section className="main">
          <Image
            src="/video.png"
            alt="動画に写っている人の画像"
            width={400}
            height={300}
            className="main-image"
          />
          <div className="main-content">
            <h1 className="main-title">
              動画で歴史を楽しく
              <span className="main-title-span">
                まずはYouTube動画を見て歴史を学んでみましょう。
              </span>
              <span className="main-title-span">
                今までとは違う発見があるはずです。
              </span>
            </h1>
          </div>
        </section>
        <section className="main">
          <Image
            src="/study.png"
            alt="Textを眺めている人の画像"
            width={400}
            height={300}
            className="main-image"
          />
          <div className="main-content">
            <h1 className="main-title">
              テキストで学ぶ
              <span className="main-title-span">
                テキストでは歴史の概要について解説しています。学び直しやテスト対策に最適です。
              </span>
              <span className="main-title-span">
                チェックリストで理解度をチェックしてみましょう
              </span>
            </h1>
          </div>
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
          <div className="main-intro-content">
            <div className="main-intro-image">
              <Image
                src="/cat.png"
                alt="自己紹介画像"
                width={160}
                height={160}
                className="main-intro-image-child"
              />
            </div>
            <div className="main-intro-paragraph">
              <p>野崎洋平</p>
              <p>高校の地歴科教員</p>
              <p>文学部史学科卒。</p>
              <p>
                愛猫と愛犬が大好き。最近はプログラミングを勉強している。
              </p>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

const StyledComponent = styled(Component)`
  max-width: 960px;
  margin: 8px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  & .main {
    padding: 24px;
    height: 100%;
    @media (min-width: 560px) {
      display: flex;
      padding: 24px;
      margin: 0 auto;
    }
  }
  & .main:nth-child(even) {
    flex-direction: row-reverse;
  }
  & .main-image {
    align-self: center;
    margin: 0 auto;
  }
  & .main-content {
    align-self: center;
  }
  & .main-title {
    margin-top: 32px;
    font-weight: ${(props) =>
      props.theme.fontWeights.semibold};
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    color: ${(props) => props.theme.colors.purple[900]};
    @media (min-width: 560px) {
      font-size: ${(props) => props.theme.fontSizes['3xl']};
    }
    @media (min-width: 960px) {
      font-size: ${(props) => props.theme.fontSizes['4xl']};
    }
  }
  & .main-title-span {
    display: block;
    margin-top: 8px;
    margin-left: 8px;
    line-height: 1.7;
    letter-spacing: 0.05em;
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) =>
      props.theme.fontWeights.light};
    color: ${(props) => props.theme.colors.purple[600]};
    @media (min-width: 560px) {
      font-size: ${(props) => props.theme.fontSizes.md};
      margin-top: 12px;
    }
    @media (min-width: 960px) {
      font-size: ${(props) => props.theme.fontSizes.lg};
      margin-top: 12px;
    }
  }
  & .main-link {
    margin: 40px 0px;
    text-align: center;
    @media (min-width: 560px) {
      display: flex;
      margin: 40px auto;
    }
  }
  & .main-link-heading {
    color: ${(props) => props.theme.colors.purple[900]};
    font-weight: ${(props) =>
      props.theme.fontWeights.semibold};
    @media (min-width: 560px) {
      line-height: 2;
      margin: 8px;
    }
  }
  & .main-link-button {
    padding: 12px 20px;
    @media (min-width: 560px) {
      margin: 8px;
    }
  }
  & .main-intro {
    margin: 40px auto 0;
    text-align: center;
    @media (min-width: 560px) {
      text-align: start;
    }
  }
  & .main-intro-content {
    @media (min-width: 560px) {
      display: flex;
    }
  }
  & .main-intro-heading {
    color: ${(props) => props.theme.colors.purple[900]};
    font-weight: ${(props) =>
      props.theme.fontWeights.semibold};
    @media (min-width: 560px) {
      margin: 16px;
    }
  }
  & .main-intro-image {
    margin: 40px auto;
    width: 160px;
    height: 160px;
    @media (min-width: 560px) {
      margin: 32px;
      order: 1;
    }
  }
  & .main-intro-image-child {
    border: solid 4px
      ${(props) => props.theme.colors.purple[900]};
    border-radius: 50%;
    box-shadow: ${(props) => props.theme.shadows.xl};
  }
  & .main-intro-paragraph {
    color: ${(props) => props.theme.colors.blackAlpha[900]};
    @media (min-width: 560px) {
      margin: 32px;
    }
  }
`;

const About: React.FC = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};

export default About;
