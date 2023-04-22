import React, { useState } from "react";
import "../style/landingPage.css";
import data from "./data";
import Card from 'react-bootstrap/Card';

const SearchButton = () => {
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState(data.cardData);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  const handleFilter = (desc) => {
    if (desc === "All Movie") {
      setMovies(data.cardData);
    } else {
      const filteredMovies = data.cardData.filter(
        (movie) => movie.desc === desc
      );
      setMovies(filteredMovies);
    }
  };

  const dataSearch = movies.filter((movie) => {
    return Object.keys(movie).some((key) =>
      movie[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="wrapper">
      <div id="search-container">
        <input
          type="search"
          id="search-input"
          placeholder="Search Movie"
          value={filter}
          onChange={searchText}
        />
      </div>
      <div id="buttons">
        <button className="button-value" onClick={() => handleFilter("All Movie")}>
          All Movie
        </button>
        <button className="button-value" onClick={() => handleFilter("On Going")}>
          On Going
        </button>
        <button className="button-value" onClick={() => handleFilter("Action")}>
          Action
        </button>
        <button className="button-value" onClick={() => handleFilter("Tranding")}>
          Tranding
        </button>
        <button className="button-value" onClick={() => handleFilter("Comedy")}>
          Comedy
        </button>
      </div>


      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  {dataSearch.map((item, index) => (
    <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.desc}
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
</div>

    </div>
  );
};

export default SearchButton;
