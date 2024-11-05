import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const Results = ({ data }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/results");
        if (!res.ok) {
          throw new Error("エラーが発生したため、データの取得に失敗しました。");
        }
        const data = await res.json();
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
      {loading ? (
        <div>ローディング中</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : results.length > 0 ? (
        results.map((result, index) => {
          return (
            <div
              className={`flex justify-around items-center   ${
                index % 2 === 0 ? "bg-gray-200" : "bg-white"
              } p-2`}
              key={result._id}
            >
              <p className="w-1/4 text-center pr-8">
                {dayjs(result.createdAt).format("YYYY/MM/DD")}
              </p>
              <p className="w-1/4  text-center pr-14">{result.result}</p>
              <p className="w-1/4  text-center pr-9 ">{result.usedCharacter}</p>
              <p className="w-1/4 text-center">{result.usedMap}</p>
            </div>
          );
        })
      ) : (
        <div>データがありません</div>
      )}
    </div>
  );
};
