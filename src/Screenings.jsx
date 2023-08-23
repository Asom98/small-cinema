import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { formatDate } from './utilities/formatDate';
import CategoryDropdown from './CategoryDropdown';


export const Screenings = () => {
  const [movies, setMovies] = useState([]);
  const [screenings, setScreenings] = useState([]);
  const[selectedCategory, setSelectedCategory] = useState("All")
  const [categories, setCategories] = useState(new Set());

  

  useEffect(() => {
    (async () => {
      const moviesData = await (await fetch('/api/movies')).json();
      const screeningsData = await (await fetch('/api/screenings')).json();
      /*moviesData.forEach(a=>{
        console.log(a)
      })*/
      
      const movieScreeningMap = {};
      screeningsData.forEach(screening => {
        const { id, time } = screening;
        if (!movieScreeningMap[id]) {
          movieScreeningMap[id] = [];
        }
        movieScreeningMap[id].push(formatDate(time));

      });

      const moviesWithScreenings = moviesData.map(movie => ({
        ...movie,
        date: movieScreeningMap[movie.id] || [],
      }));

      setMovies(moviesWithScreenings);
      setScreenings(screeningsData);

      const extractedCategories = new Set();
      moviesData.forEach(movie => {
        movie.description.categories.forEach(category => extractedCategories.add(category));
      });
      setCategories(extractedCategories);
      categories.forEach(a=>{
        console.log(a)
      })
    })();
  }, []);

  return (
    <div className="container mt-4">
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <CategoryDropdown
            selectedCategory={selectedCategory}
            categories={categories}
            onCategoryChange={setSelectedCategory}
          />
        </Col>
      </Row>
  
      <Row>
        {movies
          .filter(movie => selectedCategory === "All" || movie.description.categories.includes(selectedCategory))
          .map(({ id, title, description, length, categories, date }) => (
            <Col key={id} md={4} className="mb-4">
              <Movie
                title={title}
                description={description}
                length={length}
                categories={categories}
                date={date}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Screenings;
