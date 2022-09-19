import { Routes, Route } from 'react-router-dom';
import { Box } from 'Box';
import { StyledLink, Header } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies';

export const App = () => {
  return (
    <Box
      background="#e7ecf2"
    >
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<div>Movie Details</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
    </Box>
  );
};
