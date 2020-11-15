import { Layout } from 'component/layout';
import Image from 'next/image';

export default function Home(): React.ReactNode {
  return (
    <>
      <Layout>
        <h1>
          さあはじめよう。<span>動画で歴史を楽しく</span>
        </h1>
        <Image src="/main.svg" alt="サイトのロゴ" width={500} height={400} />
      </Layout>
    </>
  );
}
