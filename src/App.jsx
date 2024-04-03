import React, { useState } from "react";

function App() {
  const [a, setA] = useState(40); // Corrected usage of useState

  function clickFunction() {
    setA(41); // Update state using the setter function
  }

  return (
    <div className="bg-slate-700 text-center h-screen w-full">
      <h1 className="text-5xl text-fuchsia-700 text-center">
        Tailwind works if this is centered - {a}
      </h1>
      <button
        className="rounded hover:bg-red-500 bg-yellow-500 font-md text-xl"
        onClick={clickFunction}
      >
        Click Here
      </button>
    </div>
  );
}

export default App;
