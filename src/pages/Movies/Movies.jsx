import { SearchForm, Message } from './Movies.styled';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovie } from 'utils/api';
import { FilmsList } from 'components/FilmsList.jsx/FilmsList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [message, setMessage] = useState(
    'To display films, enter a query in the search field'
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const toBackLocation = `${location.pathname}${location.search}`;

  const searchFilms = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return setMessage(
        'Nothing entered! To display films, enter a query in the search field'
      );
    }
    setFilms([]);
    setSearchParams(query !== '' ? { query: query } : {});
    setQuery('');
  };

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setMessage('');
    getSearchMovie(searchQuery).then(({ total_pages, results }) =>
      setFilms(results)
    );
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery && !films.length) {
      setMessage('Sorry, nothing was found, please try your search again');
    }
  }, [films.length, searchQuery]);

  return (
    <main>
      <SearchForm onSubmit={searchFilms}>
        <input
          type="text"
          name="findForm"
          placeholder="Search films"
          value={query}
          onChange={event => setQuery(event.currentTarget.value)}
        />
        <button type="submit">Search</button>
      </SearchForm>
      {!films.length && <Message>{message}</Message>}
      <FilmsList films={films} location={toBackLocation} />
    </main>
  );
};

export default Movies;
