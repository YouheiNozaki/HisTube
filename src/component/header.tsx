import Link from 'next/link';
import Image from 'next/image';

import { Nav } from 'component/nav';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <Link href="/">
          <a href="/">
            <Image src="/logo.png" alt="サイトのロゴ" width={200} height={80} />
          </a>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
