import '../styles/Search.css';
import { Container, Row, Col } from 'react-bootstrap';

const Search = ({ data, setData, originalData }) => {

 

  const changeHandler = (e) => {
  

  const value = e.target.value.toLowerCase().trim();
  console.log("Search input:", value);

  if(value === ''){
    
    setData(originalData)
    console.log("Reverted to original data:", data);
  } else {
    const searchedArray = originalData.filter(element => {
      const name = element.name.common.toLowerCase();
      return name.startsWith(value)
    })
    setData(searchedArray)
     console.log("Filtered data:", searchedArray);
  }

  
};

  return (
    <Container>
      <form className="form_wrapper">
        <input
          className="item"
          type="text"
          placeholder="Search"
          onChange={(e) => changeHandler(e, data, setData)}
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
