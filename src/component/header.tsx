import Link from 'next/link';
import Image from 'next/image';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className="m-4 grid grid-cols-2">
        <Link href="/">
          <a href="/">
            <Image src="/logo.png" alt="サイトのロゴ" width={210} height={40} />
          </a>
        </Link>
        <Link href="/posts">
          <a>start</a>
        </Link>
      </div>
    </header>
  );
};
