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
        <p>How did you like the service?</p>
      </TipPercentage>
      <TipPercentage tipPercent={tipPercent2} onChange={handleTip2}>
        <p>How did your friend like the service?</p>
      </TipPercentage>
      <TotalBill
        billAmount={billAmount}
        tipPercent1={tipPercent1}
        tipPercent2={tipPercent2}
      />
      <Button bgColor="white" onClick={handleClick}>
        Reset
      </Button>
    </>
  );
};

export default App;

export const Bill = ({ billAmount, onEnterBill }) => {
  return (
    <div>
      <p>How much was the bill?</p>
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
  const avgTip = (tipPercent1 + tipPercent2) / 2;
  const totalAmount = Number(billAmount) + Number(avgTip);
  return (
    <div>
      You pay ${billAmount} + ${avgTip} tip = ${totalAmount}
    </div>
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
