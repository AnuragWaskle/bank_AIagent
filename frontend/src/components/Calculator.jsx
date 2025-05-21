import { useState } from 'react';
import '../styles/components/calculator.css';

const Calculator = () => {
  const [type, setType] = useState('emi');
  const [inputs, setInputs] = useState({ principal: '', rate: '', time: '', assets: '', liabilities: '' });
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const { principal, rate, time, assets, liabilities } = inputs;
    let output = '';

    if (type === 'emi') {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 12 / 100;
      const n = parseFloat(time) * 12;
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      output = `Monthly EMI: ₹${emi.toFixed(2)}`;
    } else if (type === 'fd') {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100;
      const n = parseFloat(time);
      const amount = p * Math.pow(1 + r / 4, 4 * n); // Quarterly compounding
      output = `FD Maturity: ₹${amount.toFixed(2)}`;
    } else if (type === 'interest') {
      const p = parseFloat(principal);
      const r = parseFloat(rate);
      const t = parseFloat(time);
      const si = (p * r * t) / 100;
      output = `Simple Interest: ₹${si.toFixed(2)}`;
    } else if (type === 'networth') {
      const a = parseFloat(assets);
      const l = parseFloat(liabilities);
      output = `Net Worth: ₹${(a - l).toFixed(2)}`;
    }

    setResult(output);
  };

  return (
    <div className="calculator-container">
      <h2>Financial Calculators</h2>
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="emi">EMI Calculator</option>
        <option value="fd">FD Return Calculator</option>
        <option value="interest">Interest Calculator</option>
        <option value="networth">Net Worth Calculator</option>
      </select>
      <div className="calculator-inputs">
        {type !== 'networth' ? (
          <>
            <input
              type="number"
              placeholder="Principal Amount (₹)"
              value={inputs.principal}
              onChange={(e) => setInputs({ ...inputs, principal: e.target.value })}
            />
            <input
              type="number"
              placeholder="Interest Rate (%)"
              value={inputs.rate}
              onChange={(e) => setInputs({ ...inputs, rate: e.target.value })}
            />
            <input
              type="number"
              placeholder="Time (Years)"
              value={inputs.time}
              onChange={(e) => setInputs({ ...inputs, time: e.target.value })}
            />
          </>
        ) : (
          <>
            <input
              type="number"
              placeholder="Total Assets (₹)"
              value={inputs.assets}
              onChange={(e) => setInputs({ ...inputs, assets: e.target.value })}
            />
            <input
              type="number"
              placeholder="Total Liabilities (₹)"
              value={inputs.liabilities}
              onChange={(e) => setInputs({ ...inputs, liabilities: e.target.value })}
            />
          </>
        )}
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      {result && <p className="calculator-result">{result}</p>}
    </div>
  );
};

export default Calculator;