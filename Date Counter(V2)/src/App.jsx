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
        <input
          type="range"
          className="slider"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="count">
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          className="text-input"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
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
      {count !== 0 || step !== 1 ? (
        <div className="reset-div">
          <button
            className="reset-button"
            onClick={() => {
              setStep(1);
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
}
