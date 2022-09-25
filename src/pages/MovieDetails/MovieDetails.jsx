import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getFilmById, IMG_W300, BASE_IMG_URL } from 'utils/api';
import {
  GoBackLink,
  FilmContainer,
  FilmTitle,
  VoteAverage,
  BlockTitle,
  Overview,
  GenreList,
  Container,
  AditionalInfoContainer,
  AditionalInfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const [filmGenres, setFilmGenres] = useState([]);
  const releaseYear = new Date(filmInfo.release_date).getFullYear();
  const location = useLocation();

  useEffect(() => {
    try {
      getFilmById(movieId).then(r => {
        setFilmInfo(r);
        setFilmGenres(r.genres);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <Container>
      <GoBackLink to={location.state.from ?? '/'}>Go back</GoBackLink>
      <FilmContainer>
        <div>
          <img
            src={filmInfo.poster_path !== null ? `${BASE_IMG_URL}${IMG_W300}${filmInfo.poster_path}` : 'https://houseofzayn.co.nz/wp-content/uploads/2019/08/nopicture.gif'}
            alt={filmInfo.title}
          />
        </div>
        <div>
          <FilmTitle>
            {filmInfo.title} ({releaseYear})
          </FilmTitle>
          <VoteAverage>
            <span>Average:</span> {filmInfo.vote_average}
          </VoteAverage>
          <BlockTitle>Overview</BlockTitle>
          <Overview>{filmInfo.overview}</Overview>
          <BlockTitle>Genres</BlockTitle>
          {
            <GenreList>
              {filmGenres.map(({ name }) => {
                return <li key={name}>{name}</li>;
              })}
            </GenreList>
          }
        </div>
      </FilmContainer>
      <BlockTitle>Aditional information</BlockTitle>
      <AditionalInfoContainer>
        <li>
          <AditionalInfoLink to="cast" state={{ from: location.state.from }}>
            Cast
          </AditionalInfoLink>
        </li>
        <li>
          <AditionalInfoLink to="reviews" state={{ from: location.state.from }}>
            Reviews
          </AditionalInfoLink>
        </li>
      </AditionalInfoContainer>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet context={movieId} />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;


// `${BASE_IMG_URL}${IMG_W300}${filmInfo.poster_path}`