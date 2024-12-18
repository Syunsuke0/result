import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import { Results } from "../components/Results";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">ランクマ戦績</h1>
      <div>
        <h2 className="flex justify-center">戦績の追加</h2>
        <Form />
      </div>

      <h3 className="text-center">戦績一覧</h3>
      <div className="flex justify-around">
        <div className="bg-gray-400 font-semibold rounded-lg my-2 px-4 py-1">
          日付
        </div>
        <div className="bg-gray-400 font-semibold rounded-lg my-2 px-4 py-1">
          試合結果
        </div>
        <div className="bg-gray-400 font-semibold rounded-lg my-2 px-4 py-1">
          使用キャラ
        </div>
        <div className="bg-gray-400 font-semibold rounded-lg my-2 px-4 py-1">
          使用マップ
        </div>
      </div>
      <Results />
    </div>
  );
};

export default Home;
