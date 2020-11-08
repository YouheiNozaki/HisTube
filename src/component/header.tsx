import Link from 'next/link';
import Image from 'next/image';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className="m-4 flex items-center justify-between">
        <Link href="/">
          <a href="/">
            <Image src="/logo.png" alt="サイトのロゴ" width={240} height={50} />
          </a>
        </Link>
        <Link href="/posts">
          <a className="mr-1 p-3">
            <button type="button" className="btn btn-black btn-black:hover">
              START
            </button>
          </a>
        </Link>
      </div>
    </header>
  );
};
