import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const amount = parseInt(count);
    if (amount < 1) {
      setText([]);
      setLoading(false);
      return;
    }
    setText(data.slice(0, amount));
    setLoading(false);
  };
  return (
    <>
      <section className="section-center">
        <h2>tired of boring lorem ipsum?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="count">count: </label>
          <input
            type="number"
            id="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="btn">
            show
          </button>
        </form>
      </section>
      <section className="section-center">
        <h2>result</h2>
        <p className="lorem">{loading ? "loading..." : text}</p>
      </section>
    </>
  );
}

export default App;
