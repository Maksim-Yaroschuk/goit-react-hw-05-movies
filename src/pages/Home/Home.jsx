import { useState, useEffect } from 'react';
import { getTrending } from 'utils/api';
import { HomeTitle } from './Home.styled';
import { FilmsList } from 'components/FilmsList.jsx/FilmsList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      getTrending().then(r => {
        setFilms(r.results);
      });
    } catch (error) {
      toast.error(error, { autoClose: 1000 });
    }
  }, []);
  return (
    <main>
      <HomeTitle>Most popular films of the week</HomeTitle>
      <FilmsList films={films} />
    </main>
  );
};
