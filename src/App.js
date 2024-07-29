import './styles.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Card from './components/Card'; // Renamed to CardList to avoid confusion
import { sortDataHandler } from './handlers/sortData';
export default function App() {
  const [data, setData] = useState([]); // Corrected setDate to setData
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        sortDataHandler(data, setData);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
      </header>
      <form>
        <input />
      </form>
      <Container>
        <Card data={data} />
      </Container>
    </div>
  );
}
