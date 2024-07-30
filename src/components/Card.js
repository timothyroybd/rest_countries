import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/Card.css";

const Card = ({ data }) => {
  return (
    <Row>
      {" "}
      {/* Row wrapper for the grid system */}
      {data.map((country, index) => (
        <Col key={index} md={3} className="mb-4">
          <div className="card h-100">
            <img
              src={country.flags.svg}
              className="card-img-top"
              alt={`Flag of ${country.name.common}`}
            />
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
              <p className="card-text">Population: {country.population}</p>
              <p className="card-text">Region: {country.region}</p>
              <p className="card-text">Capital: {country.capital}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Card;
