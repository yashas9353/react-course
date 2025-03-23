import "./App.css";
import useCurrencyInfo from "./hooks/CurrencyInfo";
import { useState } from "react";
import { InputBox } from "./components";

function App() {
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("usd");

  const [fromAmount, setFromAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyInfo(fromCurrency);

  const currencyoptions = Object.keys(currencyinfo);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.pexels.com/photo/buildings-near-body-of-water-at-night-1519088/')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setConvertedAmount(
                (toAmount / currencyinfo[fromCurrency]) *
                  currencyinfo[toCurrency]
              );
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={fromAmount}
                setAmmount={(ammount) => setFromAmount(ammount)}
                currencyOptions={currencyoptions}
                currency={fromCurrency}
                setCurrency={(currency) => setFromCurrency(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={toAmount}
                setAmmount={(ammount) => setToAmount(ammount)}
                currencyOptions={currencyoptions}
                currency={toCurrency}
                setCurrency={(currency) => setToCurrency(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
          <div className="mt-4 text-center text-white text-xl">
            Converted Amount: {convertedAmount.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
