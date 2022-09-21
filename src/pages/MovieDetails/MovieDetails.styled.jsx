import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;

  &:hover {
    color: orangered;
  }
`;

export const FilmContainer = styled.ul`
  margin-top: 16px;
  margin-left: 16px;
  display: flex;
  gap: 16px;
`;

export const FilmTitle = styled.h2`
font-size: 24px;
font-weight:700;
`;

export const VoteAverage = styled.p`
color: orangered;
font-weight:700;
`;

export const BlockTitle = styled.h3`
margin-top: 16px;
font-weight:700;
`;

export const Overview = styled.p`
margin-top: 8px;
`;

export const GenreList = styled.p`
margin-top: 8px;
display: flex;
gap: 8px;
`;