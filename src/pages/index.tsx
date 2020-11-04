import { Header } from 'component/header';

export default function Home(): React.ReactNode {
  return (
    <>
      <Header />
      <div className="hero">
        <h1 className="title">動画共有サイト</h1>
        <h1 className="text-center text-tertiary text-2xl py-4">
          世界史の動画を共有します
        </h1>
        <button className="btn btn-black" type="button">
          ボタン
        </button>
      </div>
    </>
  );
}
