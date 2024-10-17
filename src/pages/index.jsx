import { Inter } from "next/font/google";
import Form from "../components/Form";
import ResultList from "../components/ResultList";

const inter = Inter({ subsets: ["latin"] });
const test_results = [
  { match_result: "win", character_used: "女王", map: "軍需工場" },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">ランクマ戦績</h1>
      <div>
        <h2 className="flex justify-center">戦績の追加</h2>
        <Form />
      </div>
      <ResultList />
    </div>
  );
};

export default Home;
