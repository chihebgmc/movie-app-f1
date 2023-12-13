import React from 'react';
import MovieCard from './MovieCard';

const MovieList = props => {
  const { movieList, title, rating } = props;
  if (title === '' && rating === 0) {
    return movieList.map(element => (
      <MovieCard movie={element} key={element.id} />
    ));
  }
  return movieList
    .filter(
      element =>
        element.title.toLowerCase().includes(title.toLowerCase().trim()) &&
        element.rating >= rating
    )
    .map(element => <MovieCard movie={element} key={element.id} />);
};

export default MovieList;
