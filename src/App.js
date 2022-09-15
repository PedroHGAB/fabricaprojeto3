import {useEffect, useState} from "react";

function App() {

  const [joke, setJoke] = useState("Joke's here!") //constantes

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () =>{
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setJoke(data.joke);
  }; //piada aparecer



  return (
    <div className="container">
      <h1>Don't laugh challenge</h1>
      <p className="joke">{joke}</p>
      <button className="btn">Get Another Joke</button>
    </div>
  );
}

export default App;
