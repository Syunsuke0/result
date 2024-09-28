import Image from "next/image";
import { Inter } from "next/font/google";
import CharaPicker from "../../components/CharaPicker";
import MapPicker from "../../components/MapPicker";

const inter = Inter({ subsets: ["latin"] });
const test_results = [
  { match_result: "win", character_used: "女王", map: "軍需工場" },
];

const Home = () => {
  return (
    <div>
      <div className="text-4xl text-center my-11">ランクマ戦績</div>
      <div>
        <h2 className="text-center text-2xl bg-slate-400 ">戦績の追加</h2>
        <form className="bg-slate-400 " action="">
          <div>
            <h2>使用キャラ</h2>
            <CharaPicker />
          </div>
          <div>
            <h2>マップ</h2>
            <MapPicker />
          </div>
          <div>
            <h2>試合結果</h2>
          </div>
          <button className="outline">add</button>
        </form>
      </div>
      <div>
        <h1>試合戦績</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
