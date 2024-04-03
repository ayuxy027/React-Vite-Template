import React, { useState } from "react";

function App() {
  const [a, setA] = useState(40);
  function clickFunction() {
    setA(a + 1);
  }

  return (
    <div className="w-full h-screen text-center bg-slate-700">
      <h1 className="text-5xl text-center text-fuchsia-700">
        Tailwind works if this is centered - {a}
      </h1>
      <button
        className="rounded hover:bg-red-500 bg-yellow-500 font-md text-xl p-[12px] m-5"
        onClick={clickFunction}
      >
        Click Here
      </button>
    </div>
  );
}

export default App;
