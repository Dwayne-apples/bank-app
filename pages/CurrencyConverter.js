import React, { useState } from "react";

//Exchange rate data was provided by an assignment from another CPAN-112
const exchangeRates = {
  CAD: { CAD: 1.0000, USD: 1.3118, EUR: 1.4983, GBP: 1.6832, JPY: 0.0117, CNY: 0.1890, CHF: 1.3160, INR: 0.0179 },
  USD: { CAD: 0.7625, USD: 1.0000, EUR: 1.1417, GBP: 1.2829, JPY: 0.0089, CNY: 0.1440, CHF: 1.0029, INR: 0.0137 },
  EUR: { CAD: 0.6681, USD: 0.8761, EUR: 1.0000, GBP: 1.1237, JPY: 0.0078, CNY: 0.1261, CHF: 0.8783, INR: 0.0120 },
  GBP: { CAD: 0.5944, USD: 0.7796, EUR: 0.8900, GBP: 1.0000, JPY: 0.0070, CNY: 0.1123, CHF: 0.7818, INR: 0.0107 },
  JPY: { CAD: 85.2902, USD: 111.8642, EUR: 127.7273, GBP: 143.5219, JPY: 1.0000, CNY: 16.1130, CHF: 112.1951, INR: 1.5301 },
  CNY: { CAD: 5.2936, USD: 6.9430, EUR: 7.9270, GBP: 8.9068, JPY: 0.0621, CNY: 1.0000, CHF: 6.9630, INR: 0.0950 },
  CHF: { CAD: 0.7604, USD: 0.9971, EUR: 1.1384, GBP: 1.2792, JPY: 0.0089, CNY: 0.1436, CHF: 1.0000, INR: 0.0136 },
  INR: { CAD: 55.7528, USD: 73.1157, EUR: 83.4803, GBP: 93.8001, JPY: 0.6536, CNY: 10.5313, CHF: 73.3300, INR: 1.0000 },
};

const CurrencyConversion = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("CAD"); //Default to CAD
  const [toCurrency, setToCurrency] = useState("USD"); //Default to USD
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convert = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;
    setConvertedAmount(result.toFixed(4)); // Using toFixed method to round to 4 decimals
  };

  return (
    <div className="iban-container" style={{color:'black'}}>
      <h2>Currency Converter</h2>
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label>From: </label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        > 
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency}>{currency}</option>
            //Using object.keys to get the properties of the object, in this case the currency code
          ))}
        </select>
      </div>

      <div>
        <label>To: </label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <button onClick={convert}>Convert</button>

      {convertedAmount !== null && (
        <div>
          <p>
            Converted Amount: {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConversion;