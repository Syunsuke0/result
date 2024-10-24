import { useState } from "react";

const Form = () => {
  const [usedCharacter, setUsedCharacter] = useState("");
  const [usedMap, setUsedMap] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      usedCharacter,
      usedMap,
      result,
    };

    try {
      const response = await fetch("http://localhost:8080/api/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch {}
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      action="localhost:8080/api/results"
      className="bg-slate-400 p-8 rounded-3xl"
    >
      <h2 className="text-lg">使用キャラ</h2>
      <label>
        Pick a used Character :
        <select value={usedCharacter} onChange={selectCharacter}>
          <option value="">キャラを選択</option>
          <option value="女王">女王</option>
          <option value="破輪">破輪</option>
          <option value="魔女">魔女</option>
        </select>
      </label>

      <h2 className="text-lg">マップ</h2>
      <label>
        Pick a used Map :
        <select value={usedMap} onChange={selectMap} name="selectMap">
          <option value="">マップを選択</option>
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

      <h3 className="text-lg">勝敗</h3>
      <div>
        {radioButtons.map((radio) => {
          return (
            <label key={radio.value}>
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

      <div className="mx-2 flex ">
        <button type="reset" className="outline rounded-md">
          リセット
        </button>
        <button type="submit" className="mx-4 outline rounded-md">
          戦績を追加する
        </button>
      </div>
    </form>
  );
};

export default Form;
