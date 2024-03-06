import { useState } from "react";

function App() {
  return (
    <>
      <DateCounter />
    </>
  );
}

export default App;

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="step">
        <button onClick={() => (step > 0 ? setStep(step - 1) : "")}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
