import { Routes, Route } from 'react-router-dom';
import { StyledLink, Header } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
    </div>
  );
};
