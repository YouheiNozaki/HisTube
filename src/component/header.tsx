import Link from 'next/link';
import Image from 'next/image';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <Link href="/">
          <a href="/">
            <Image src="/girl.png" alt="サイトのロゴ" width={60} height={60} />
          </a>
        </Link>
        <Link href="/posts">
          <a>動画一覧</a>
        </Link>
      </div>
    </header>
  );
};
