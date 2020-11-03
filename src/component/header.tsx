import Link from 'next/link';
import Image from 'next/image';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <Link href="/">
          <Image src="/girl.png" alt="サイトのロゴ" width={60} height={60} />
        </Link>
        <Link href="/post">
          <a href="/post">動画一覧</a>
        </Link>
      </div>
    </header>
  );
};
