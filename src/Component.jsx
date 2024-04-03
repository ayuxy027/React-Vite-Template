import React from "react";

function Component({ a, clickFunction }) {
  // Accept props as parameters
  return (
    <div className="w-full h-screen text-center absolute top-[47%]">
      <h1 className="text-5xl text-center text-fuchsia-700">
        Tailwind works if this is centered - {a}
      </h1>
      <button
        className="rounded-[25px] hover:bg-red-500 bg-yellow-500 font-md text-xl p-[17px] m-5"
        onClick={clickFunction}
      >
        Click Here
      </button>
    </div>
  );
}

export default Component;
