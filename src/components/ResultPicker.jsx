const ResultPicker = () => {
  return (
    <div>
      <label>
        <input type="radio" value="win" name="result" />
        勝ち
      </label>
      <label>
        <input type="radio" value="lose" name="result" />
        負け
      </label>
      <label>
        <input type="radio" value="draw" name="result" />
        引き分け
      </label>
    </div>
  );
};

export default ResultPicker;
