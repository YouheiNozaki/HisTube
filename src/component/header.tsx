import Link from 'next/link';
import Image from 'next/image';

import { Nav } from 'component/nav';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className="m-4 flex items-center justify-between">
        <Link href="/">
          <a href="/">
            <Image src="/logo.png" alt="サイトのロゴ" width={240} height={50} />
          </a>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
