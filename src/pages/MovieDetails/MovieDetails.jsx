import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getFilmById, IMG_W200, BASE_IMG_URL } from 'utils/api';
import {
  StyledLink,
  FilmContainer,
  FilmTitle,
  VoteAverage,
  BlockTitle,
  Overview,
  GenreList,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie = 'not movie' }) => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const [filmGenres, setFilmGenres] = useState([]);
  const releaseYear = new Date(filmInfo.release_date).getFullYear();
//   const fixedAverage = filmInfo.vote_average.toFixed(1);

  useEffect(() => {
    try {
      getFilmById(movieId).then(r => {
        setFilmInfo(r);
        setFilmGenres(r.genres);
        console.log(r);
      });
    } catch (error) {
      toast.error(error, { autoClose: 1000 });
    }
  }, [movieId]);

  return (
    <>
      <StyledLink to={'/'}>Go back</StyledLink>
      <FilmContainer>
        <li>
          <img
            src={`${BASE_IMG_URL}${IMG_W200}${filmInfo.poster_path}`}
            alt={filmInfo.title}
          />
        </li>
        <li>
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
                return <li>{name}</li>;
              })}
            </GenreList>
          }
        </li>
      </FilmContainer>
    </>
  );
};
