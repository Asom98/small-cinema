import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { Row, Col } from 'react-bootstrap';
import { formatDate } from './utilities/formatDate';
import CategoryDropdown from './CategoryDropdown';
import DatesDropdown from './DatesDropdown';

export const Screenings = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDates, setSelectedDates] = useState("All");
  const [categories, setCategories] = useState(new Set());
  const [dates, setDates] = useState(new Set());
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const moviesData = await (await fetch('/api/movies')).json();
      const screeningsData = await (await fetch('/api/screenings')).json();

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

      const extractedCategories = new Set();
      moviesData.forEach(movie => {
        movie.description.categories.forEach(category => extractedCategories.add(category));
      });
      setCategories(extractedCategories);

      const extractedDated = new Set();
      moviesWithScreenings.forEach(movie => {
        movie.date.forEach(date => extractedDated.add(formatDate(date)));
      });
      setDates(Array.from(extractedDated));

      const initialFilteredMovies = selectedDates === "All" ? moviesWithScreenings : moviesWithScreenings.filter(movie =>
        movie.date.includes(selectedDates)
      );
      setFilteredMovies(initialFilteredMovies);
    })();
  }, [selectedDates]);

  return (
    <div className="container mt-4">
      <Row className="justify-content-left mb-4">
        <Col md={6}>
          <DatesDropdown
            selectedDate={selectedDates}
            dates={Array.from(dates)}
            onDateChange={setSelectedDates}
          />
        </Col>
      </Row>

      <Row className="justify-content-left mb-4">
        <Col md={6}>
          <CategoryDropdown
            selectedCategory={selectedCategory}
            categories={categories}
            onCategoryChange={setSelectedCategory}
          />
        </Col>
      </Row>

      <Row>
        {filteredMovies
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
