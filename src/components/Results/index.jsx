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
  );
};
