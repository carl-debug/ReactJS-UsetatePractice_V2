import "./styles.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  const countingNumbers = Array.from({ length: 31 }, (_, i) => i + 1);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    setStep((s) => s + 1);
  }

  const [multi, setMulti] = useState(1);

  function multiNext() {
    setMulti((m) => (m === 1 ? m * step : m + step));
  }

  function multiPrevious() {
    setMulti((m) => (m === 1 ? m * step : m - step));
  }

  return (
    <div className="App">
      <Step
        step={step}
        setStep={setStep}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        countingNumbers={countingNumbers}
      />
      <Count
        step={step}
        multi={multi}
        setMulti={setMulti}
        multiNext={multiNext}
        multiPrevious={multiPrevious}
      />
    </div>
  );
}

function Step({ step, setStep, handlePrevious, handleNext, countingNumbers }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={handlePrevious}>-</button>
      <p>Step: {countingNumbers[step - 1]}</p>
      <button onClick={handleNext}>+</button>
    </div>
  );
}

function Count({ multi, setMulti, step, multiNext, multiPrevious }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={multiPrevious}>-</button>
      <input
        type="text"
        value={multi}
        onChange={(e) => setMulti(Number(e.target.value))}
      />
      <button onClick={multiNext}>+</button>
    </div>
  );
}
