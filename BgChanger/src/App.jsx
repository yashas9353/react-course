import { useState } from "react";
import "./App.css";

function App() {
  const [bgcolor, setbgColor] = useState("gray");

  const changeBgColorToBlue = (e) => {
    setbgColor("blue");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen transition-colors duration-500"
      style={{ background: bgcolor }}
    >
      <div className="fixed bottom-4 bg-gray-700 p-4 rounded-lg shadow-lg">
        <div className="space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={changeBgColorToBlue}
          >
            Blue
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setbgColor("green")}
          >
            Green
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setbgColor("red")}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
