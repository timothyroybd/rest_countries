import "../styles/Search.css";
import { Container, Row, Col } from "react-bootstrap";
// form_wrapper
const Search = () => {
  return (
    <Container>
      <form className="form_wrapper">
        <input className="item" type="text" placeholder="Search" />

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
