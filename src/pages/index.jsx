import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import ResultList from "../components/ResultList";

const inter = Inter({ subsets: ["latin"] });
const test_results = [
  { match_result: "win", character_used: "女王", map: "軍需工場" },
];

const Home = ({ data }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/results");
      const data = await response.json();
      setResults(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">ランクマ戦績</h1>
      <div>
        <h2 className="flex justify-center">戦績の追加</h2>
        <Form />
      </div>
      <ResultList data={results} />
    </div>
  );
};

export default Home;
