import '../styles/Search.css';
import { Container, Row, Col } from 'react-bootstrap';

const Search = ({ data, setData, originalData }) => {
  const searchHandler = (e) => {
    const value = e.target.value.toLowerCase().trim();
    console.log('Search input:', value);

    if (value === '') {
      setData(originalData);
      console.log('Reverted to original data:', data);
    } else {
      const searchedArray = originalData.filter((element) => {
        const name = element.name.common.toLowerCase();
        return name.startsWith(value);
      });
      setData(searchedArray);
      console.log('Filtered data:', searchedArray);
    }
  };
  const selectHandler = (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value);
    if (value === '') {
      setData(originalData);
    } else {
      const filterArray = originalData.filter((element) => {
        const region = element.region.toLowerCase();

        return region === value;
      });
      setData(filterArray);
    }
  };

  return (
    <Container>
      <form className="form_wrapper">
        <input
          className="item"
          type="text"
          placeholder="Search"
          onChange={(e) => searchHandler(e, data, setData)}
        />

        <select className="item" onChange={selectHandler}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="antarctic">Antarctic</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </Container>
  );
};

export default Search;
