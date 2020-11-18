import Image from 'next/image';
import styled from 'styled-components';

import { Layout } from 'component/layout';
import { Button } from 'component/atoms/button';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <section className="main">
          <h1 className="main-title">
            動画で楽しく学ぶ。
            <span className="main-title-span">スキマ時間に。</span>
            <span className="main-title-span">効率よく。</span>
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
          <Button text="動画一覧を見る" className="main-link-button" />
        </section>
      </div>
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
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    color: ${(props) => props.theme.colors.purple[600]};
  }
  & .main-link {
    margin: 40px 0px;
    text-align: center;
  }
  & .main-link-button {
    padding: 12px 20px;
  }
`;

const Home: React.FC = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};

export default Home;
