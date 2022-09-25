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
                src={`${BASE_IMG_URL}${IMG_W300}${poster_path}`}
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
