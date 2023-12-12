import React from 'react';
import MovieCard from './MovieCard';

const MovieList = props => {
  const { movieList, title } = props;
  return movieList
    .filter(element =>
      element.title.toLowerCase().includes(title.toLowerCase())
    )
    .map(element => <MovieCard movie={element} key={element.id} />);
};

export default MovieList;
