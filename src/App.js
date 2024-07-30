import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult(result + Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear input field after operation
  };

  function minus(e) {
    e.preventDefault();
    setResult(result - Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear input field after operation
  };

  function times(e) {
    e.preventDefault();
    setResult(result * Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear input field after operation
  };

  function divide(e) {
    e.preventDefault();
    // Prevent division by zero
    if (inputRef.current.value === "0") {
      alert("Cannot divide by zero");
      return;
    }
    setResult(result / Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear input field after operation
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = ""; // Clear input field
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0); // Reset result to 0
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p>
          {result}
        </p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput} style={{ background: 'tomato', color: 'white' }}>reset input</button>
        <button onClick={resetResult} style={{ background: 'tomato', color: 'white' }}>reset result</button>
      </form>
    </div>
  );
}

export default App;
