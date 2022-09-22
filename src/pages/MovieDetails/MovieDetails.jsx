import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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

export const MovieDetails = () => {
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
      toast.error(error, { autoClose: 1000 });
    }
  }, [movieId]);

  return (
    <Container>
      <GoBackLink to={'/'}>Go back</GoBackLink>
      <FilmContainer>
        <div>
          <img
            src={`${BASE_IMG_URL}${IMG_W300}${filmInfo.poster_path}`}
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
        <li><AditionalInfoLink to="cast" state={{ from: location.pathname }}>Cast</AditionalInfoLink></li>
        <li><AditionalInfoLink to="reviews" state={{ from: location.pathname }}>Reviews</AditionalInfoLink></li>
      </AditionalInfoContainer>
      <Outlet context={movieId}/>
    </Container>
  );
};
