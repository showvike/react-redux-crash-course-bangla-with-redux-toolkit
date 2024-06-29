"use client";

import { useState } from "react";
import Count from "./count";
import CustomButton from "./customButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAddCount = () => setCount((count) => count + 1);
  const handleDeleteCount = () => setCount((count) => count - 1);

  return (
    <div className="flex flex-col items-center gap-4 shadow-md px-12 py-4">
      <Count count={count} />
      <div className="flex gap-2">
        <CustomButton
          onClick={handleAddCount}
          text="ADD"
          className="bg-green-500 text-white hover:bg-green-700 active:bg-green-500"
        />
        <CustomButton
          onClick={handleDeleteCount}
          text="DELETE"
          className="bg-red-500 text-white hover:bg-red-700 active:bg-red-500"
        />
      </div>
    </div>
  );
}
