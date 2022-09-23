import { SearchForm } from './Movies.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSearchMovie } from 'utils/api';
import { FilmsList } from 'components/FilmsList.jsx/FilmsList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchFilms = event => {
    event.preventDefault();
    console.log(event.target.findForm.value);
    if (query.trim() === '') {
      return toast('Nothing entered', { autoClose: 1000 });
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
    getSearchMovie(searchQuery).then(({ total_pages, results }) =>
      setFilms(results)
    );
  }, [searchQuery]);

  return (
    <main>
      <SearchForm onSubmit={searchFilms}>
        <input
          type="text"
          name="findForm"
          placeholder="Search films"
          onChange={event => setQuery(event.currentTarget.value)}
        />
        <button type="submit">Search</button>
      </SearchForm>
      <FilmsList films={films} />
    </main>
  );
};
