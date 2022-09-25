import { useState, useEffect } from 'react';
import { getTrending } from 'utils/api';
import { HomeTitle } from './Home.styled';
import { FilmsList } from 'components/FilmsList.jsx/FilmsList';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      getTrending().then(r => setFilms(r.results));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main>
      <HomeTitle>Most popular films of the week</HomeTitle>
      <FilmsList films={films} />
    </main>
  );
};

export default Home;
