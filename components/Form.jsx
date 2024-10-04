// import CharaPicker from "./CharaPicker";
import { useState } from "react";

const Form = () => {
  const [usedCharacter, setUsedCharacter] = useState();
  const [usedMap, setUsedMap] = useState();
  const [result, setResult] = useState();
  const radioButtons = [
    {
      label: "勝利",
      value: "win",
    },
    {
      label: "引き分け",
      value: "draw",
    },
    {
      label: "敗北",
      value: "lose",
    },
  ];
  const selectCharacter = (e) => {
    setUsedCharacter(e.target.value);
  };
  const selectMap = (e) => {
    setUsedMap(e.target.value);
  };
  const selectResult = (e) => {
    setResult(e.target.value);
  };

  return (
    <form method="post" action="/hoge" className="bg-slate-400">
      <h2>使用キャラ</h2>
      <label>
        Pick a used Character :
        <select value={usedCharacter} onChange={selectCharacter}>
          <option value="女王">女王</option>
          <option value="破輪">破輪</option>
          <option value="魔女">魔女</option>
        </select>
      </label>

      <h2>マップ</h2>
      <label>
        Pick a used Map :
        <select value={usedMap} onChange={selectMap} name="selectMap">
          <option value="軍需工場">軍需工場</option>
          <option value="赤の教会">赤の教会</option>
          <option value="聖心病院">聖心病院</option>
          <option value="湖景村">湖景村</option>
          <option value="月の河公園">月の河公園</option>
          <option value="レオの思い出">レオの思い出</option>
          <option value="永眠町">永眠町</option>
          <option value="中華街">中華街</option>
        </select>
      </label>

      <h3>勝敗</h3>
      <div>
        {radioButtons.map((radio) => {
          return (
            <label>
              <input
                type="radio"
                value={radio.value}
                checked={radio.value === result}
                onChange={selectResult}
              />
              {radio.label}
            </label>
          );
        })}
      </div>

      <div className="mx-2">
        <button type="reset" className="outline">
          リセット
        </button>
        <button type="submit" className="outline">
          戦績を追加する
        </button>
      </div>
    </form>
  );
};

export default Form;
