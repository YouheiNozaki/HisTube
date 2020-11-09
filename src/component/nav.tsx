import Link from 'next/link';

export const Nav = (): JSX.Element => {
  return (
    <header>
      <div className="m-4 flex items-center justify-between">
        <Link href="/posts">
          <a href="/posts">世界史</a>
        </Link>
        <Link href="/posts">
          <a href="/posts">日本史</a>
        </Link>
        <p>オリジナル</p>
      </div>
    </header>
  );
};
