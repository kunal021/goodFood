// import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Input({ input, setInput, setQuery }) {
  console.log(input);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(input);
      }}
      className="flex justify-center items-center my-20 "
    >
      <div className="border-[3px] border-black rounded-full ">
        <input
          type="text"
          placeholder="Enter Recipe"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-[50vw] px-4 py-3 text-xl text-black rounded-l-full focus:outline-none"
        />
        <button
          onClick={() => setQuery(input)}
          className="px-4 py-3 text-xl text-yellow-50 bg-black rounded-r-full"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Input;
