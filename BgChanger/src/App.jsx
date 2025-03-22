import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-amber-500 bg-center">
        <h1 className="text-emerald-400 text-5xl text-center">React Counter</h1>
        <button
          className="rounded-2xl mx-1 my-1 px-2 py-1 bg-emerald-500 text-white"
          onClick={() =>
            setCount((prev) => {
              return prev + 1;
            })
          }
        >
          Increment
        </button>
        <button
          className="rounded-2xl mx-1 my-1 px-2 py-1 bg-emerald-500 text-white "
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <p>Count: {count}</p>
      </div>
    </>
  );
}

export default App;
