import Image from "next/image";
import { Inter } from "next/font/google";
import CharaPicker from "../../components/CharaPicker";
import MapPicker from "../../components/MapPicker";
import ResultPicker from "../../components/ResultPicker";
import Form from "../../components/Form";

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
      </div>
      <Form />
    </div>
  );
};

export default Home;
