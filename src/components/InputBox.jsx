import React, {useId} from 'react'

/*
API REFERENCE > HOOKS >

useld: useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

const id = useId()
*/

function InputBox({
  label,
  amount, 
  onAmountChange, // onAmountChange is a function
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
    const amountInputId = useId()

  return (
    // user may pass some CSS as well
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
      
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40">
          {label}
        </label>

        <input id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled = {amountDisable}
          value={amount}
          onChange={(evt) => onAmountChange && onAmountChange(Number(evt.target.value))} // JS takes the values inside events as String. So, typeCast it to Number.
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">
          Currency Type
        </p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // No need to change in Number as 'usd', 'inr' are strings only
          disabled = {currencyDisable}
        >
            {currencyOptions.map((currency) => (
                // to bring performance in loops in react... we should pass key -- remember the key in loops in react
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;
