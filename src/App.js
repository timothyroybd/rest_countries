import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setDate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setDate(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Where in the world? </h1>
      </header>
      <form>
        <input />
      </form>
      <div>
        {data.map((country, index) => (
          <div key={index}>
            <img src={country.flags.svg} />
            <h1> {country.name.common}</h1>
            <p> Population: {country.population} </p>

            <p> Capital: {country.capital} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
