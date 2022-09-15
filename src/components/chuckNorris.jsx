import { useEffect, useState } from "react";

function ChuckNorris() {
    const [chuck, setChuck] = useState("Chuck Facts");

    useEffect(() => {
    getChuck();
}, []);

const getChuck = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
    headers: {
        Accept: "application/json",
    },
    });
    const data = await response.json();
    setChuck(data.chuck);
    };

  return (
    <div className="container">
      <h1>Chuck Norris Facts</h1>
      <p className="joke">{chuck}</p>
      <button type="button" className="btn">
        Get Another Fact
      </button>
    </div>
  );
};

export default ChuckNorris;