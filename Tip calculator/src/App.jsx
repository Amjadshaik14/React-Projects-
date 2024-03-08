/* eslint-disable react/prop-types */
import { useState } from "react";

const App = () => {
  const [billAmount, setBillAmount] = useState("");
  function handleBillAmount(e) {
    setBillAmount(Number(e.target.value));
  }
  const [tipPercent1, setTipPercent1] = useState(0);
  function handleTip1(e) {
    setTipPercent1(Number(e.target.value));
  }
  const [tipPercent2, setTipPercent2] = useState(0);
  function handleTip2(e) {
    setTipPercent2(Number(e.target.value));
  }

  function handleClick() {
    setBillAmount(0);
    setTipPercent1(0);
    setTipPercent2(0);
  }
  return (
    <>
      <Bill billAmount={billAmount} onEnterBill={handleBillAmount} />
      <TipPercentage tipPercent={tipPercent1} onChange={handleTip1}>
        <label>How did you like the service?</label>
      </TipPercentage>
      <TipPercentage tipPercent={tipPercent2} onChange={handleTip2}>
        <label>How did your friend like the service?</label>
      </TipPercentage>

      {billAmount > 0 && (
        <>
          <TotalBill
            billAmount={billAmount}
            tipPercent1={tipPercent1}
            tipPercent2={tipPercent2}
          />
          <Button bgColor="white" onClick={handleClick}>
            Reset
          </Button>
        </>
      )}
    </>
  );
};

export default App;

export const Bill = ({ billAmount, onEnterBill }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={billAmount}
        onChange={onEnterBill}
        placeholder="Enter the Bill amount..."
      />
    </div>
  );
};

export const TipPercentage = ({ children, tipPercent, onChange }) => {
  return (
    <div>
      {children}
      <select value={tipPercent} onChange={onChange}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export const TotalBill = ({ billAmount, tipPercent1, tipPercent2 }) => {
  const tip = billAmount * ((tipPercent1 + tipPercent2) / 2 / 100);
  const totalAmount = Number(billAmount) + Number(tip);
  return (
    <h3>
      You pay ${billAmount} + ${tip} tip = ${totalAmount}
    </h3>
  );
};
function Button({ bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, border: "1px solid black" }}
    >
      {children}
    </button>
  );
}
