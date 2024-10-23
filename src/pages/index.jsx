import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import ResultList from "../components/ResultList";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ data }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/resultss");
        if (!res.ok) {
          throw new Error("エラーが発生したため、データの取得に失敗しました。");
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
        setError(error);
      }
    };
    getResults();
    setLoading(false);
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">ランクマ戦績</h1>
      <div>
        <h2 className="flex justify-center">戦績の追加</h2>
        <Form />
      </div>
      <div className="">
        <h3 className="text-center">戦績一覧</h3>
        <div className="flex justify-around">
          <div className="bg-gray-200 p-2">試合結果</div>
          <div className="bg-gray-200 p-2">使用キャラ</div>
          <div className="bg-gray-200 p-2">使用マップ</div>
        </div>
        {loading ? (
          <div>ローディング中</div>
        ) : error ? (
          <div>{error.message}</div>
        ) : results.length > 0 ? (
          results.map((result, index) => {
            return (
              <div className="flex justify-around" key={results.index}>
                <p>{result.result}</p>
                <p>{result.usedCharacter}</p>
                <p>{result.usedMap}</p>
              </div>
            );
          })
        ) : (
          <div>データがありません</div>
        )}
      </div>
    </div>
  );
};

export default Home;
