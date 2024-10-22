import { fetchResultsData } from "@/libs/fetchResultsData";

const ResultList = (props) => {
  return (
    <div className="">
      <h3 className="text-center">戦績一覧</h3>
      <div className="flex justify-around">
        <div className="bg-gray-200 p-2">日付</div>
        <div className="bg-gray-200 p-2">試合結果</div>
        <div className="bg-gray-200 p-2">使用キャラ</div>
        <div className="bg-gray-200 p-2">使用マップ</div>

        {results.length > 0
          ? results.map((result, index) => {
              return (
                <div key={results.index}>
                  <p>{result.result}</p> // resultsが存在するとき
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ResultList;
