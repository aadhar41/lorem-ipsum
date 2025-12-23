import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
    setLoading(false);
  };
  return (
    <>
      <section className="section-center">
        <h2>tired of boring lorem ipsum?</h2>
        <form className="lorem-form" onSubmit={handleSubmit}>
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
      <article className="section-center lorem-text">
        <h2>result</h2>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </>
  );
}

export default App;
