import PropTypes from 'prop-types';
import { IMG_W300, BASE_IMG_URL } from 'utils/api';
import {
  FilmsContainer,
  FilmItem,
  FilmPoster,
  FilmTitle,
} from './FilmsList.styled';
import { Link } from 'react-router-dom';

export const FilmsList = ({ films, location }) => {
  return (
    <FilmsContainer>
      {films.map(({ id, title, poster_path }) => {
        return (
          <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
            <FilmItem>
              <FilmPoster
                src={poster_path !== null ? `${BASE_IMG_URL}${IMG_W300}${poster_path}` : 'https://houseofzayn.co.nz/wp-content/uploads/2019/08/nopicture.gif'}
                alt={title}
              />
              <FilmTitle>{title}</FilmTitle>
            </FilmItem>
          </Link>
        );
      })}
    </FilmsContainer>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  location: PropTypes.string,
};