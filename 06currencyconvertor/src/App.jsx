import { useState } from 'react'
import { InputBox } from './components'
import  useCurrencyInfo  from './hooks/useCurrencyInfo'

/*
This code defines the App component, which serves as the main component of the currency conversion application. It allows users to input an amount in one currency, select another currency to convert to, and perform the conversion.
*/
function App() {

  const [amount,setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0);

  /*
Uses the useState hook to manage state variables:
amount: Represents the amount to convert.
from: Represents the currency code of the input amount.
to: Represents the currency code to convert to.
convertedAmount: Represents the converted amount.
  */

  const currencyInfo = useCurrencyInfo(from);

  let options = Object.keys(currencyInfo);
  // let options = [1, 2, 3];
/*
Uses the custom hook useCurrencyInfo to fetch currency information based on the from currency.
Extracts the currency options available for conversion from the fetched currency information.
*/
  //swap functionality

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  /*
Defines a function swap to swap the input and output currencies.
Updates from and to states and swaps the amount and convertedAmount values.
  */

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])// this will show final result

  }

  /*
Defines a function convert to perform the currency conversion.
Calculates the converted amount using the conversion rate obtained from currencyInfo and updates the convertedAmount state.
  */

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                onAmountChange={(amount) => setAmount(amount)}


              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  /*
Renders two instances of the InputBox component for inputting the amount and selecting currencies.
Provides props to configure the behavior and appearance of the input boxes.
Renders a button to trigger the conversion process.
  */
}

export default App

/*
Reasoning:
State Management:

Reasoning: Using state variables to manage the input amount, input currency, output currency, and converted amount allows for dynamic updates and facilitates interaction with the application.
Effect on Application: Enables users to input amounts, select currencies, and view the converted amounts in real-time, enhancing the user experience.
Fetching Currency Information:

Reasoning: Fetching currency information based on the input currency ensures that the conversion rates are up-to-date and accurate.
Effect on Application: Provides reliable data for currency conversion, ensuring the accuracy of the conversion process and improving the application's reliability.
Swap and Conversion Functionality:

Reasoning: Implementing functionality to swap currencies and perform conversions allows users to easily switch between currencies and obtain conversion results.
Effect on Application: Enhances usability by providing convenient features for users to interact with the application, improving the overall user experience.
*/
