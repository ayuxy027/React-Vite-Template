import React, { useState } from "react";
import Component from "./Component"; // Import the Component component

function App() {
  const [a, fnA] = useState(0);

  function clickFunction() {
    fnA(a + 1);
  }

  return (
    <>
      <div className="w-full h-screen bg-slate-600">
        <Component a={a} clickFunction={clickFunction} />{" "}
        {/* Use the Component component */}
      </div>
    </>
  );
}

export default App;
