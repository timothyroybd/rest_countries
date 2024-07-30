import "../styles/Search.css";
import { Container, Row, Col } from "react-bootstrap";

const changeHandler = (e) => {
  const value = e.target.value;
};

const Search = () => {
  return (
    <Container>
      <form className="form_wrapper">
        <input
          className="item"
          type="text"
          placeholder="Search"
          onChange={(e) => changeHandler(e)}
        />

        <select className="item">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </Container>
  );
};

export default Search;
