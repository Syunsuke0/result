import { fetchResultsData } from "@/libs/fetchResultsData";

const ResultList = (props) => {
  const { results } = props.data;
  return (
    <div className="">
      <h3 className="text-center">戦績一覧</h3>
      <div className="flex justify-around">
        <div className="bg-gray-200 p-2">試合結果</div>
        <div className="bg-gray-200 p-2">使用キャラ</div>
        <div className="bg-gray-200 p-2">使用マップ</div>
        <div>
          {results === undefined ? (
            <p>Loading...</p> // resultsがundefinedの時
          ) : (
            results.map((result, index) => (
              <div key={index}>
                <p>{result.result}</p> // resultsが存在するとき
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultList;
