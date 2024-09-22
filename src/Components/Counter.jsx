import React, { useState } from "react";

function Counter() {
  // created usestate
  const [counter, updateCounter] = useState(0);
  //   -----------------------
  // Update function
  function updater() {
    updateCounter(counter + 1);
  }
  function decrement() {
    updateCounter(counter - 1);
  }
  function reset() {
    updateCounter(0);
  }
  //   -----------------------
  return (
    <div>
      <div className=" flex flex-col justify-center items-center h-[50vh]  gap-10">
        <h3 className="font-medium text-blue-600 text-2xl">Increment & Decrement</h3>
        <div className=" text-2xl rounded-md bg-white text-gray-700 flex justify-center gap-12 py-3">
          <button onClick={decrement} className="border-r-2 text-centre w-20 border-[#bfbfbf] text-5xl">-</button>
          
          <div className="font-bold gap-12 text-5xl">{counter}</div>
          
          <button onClick={updater} className="border-l-2 text-centre w-20 border-[#bfbfbf] text-5xl">+</button>
        </div>
        <button
          onClick={reset}
          type="reset"
          className=" px-5 py-2 text-lg bg-blue-600 text-white text-xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
