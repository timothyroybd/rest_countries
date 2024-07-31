// Libraries
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

// handlers
import { sortDataHandler } from "./handlers/sortData";

// components
import Card from "./components/Card";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
//styles
import "./styles/styles.css";

export default function App() {
  //States
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        sortDataHandler(data, setData, setFilteredData);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
        <p> Dark Mode </p>
      </header>
      <Search
        data={filteredData}
        setData={setFilteredData}
        originalData={data}
      />

      <Container>
        <Card
          data={filteredData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <Pagination
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </div>
  );
}
