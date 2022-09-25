import styled from 'styled-components';

export const FilmsContainer = styled.ul`
  margin-top: 16px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  list-style: none;
`;

export const FilmItem = styled.li`
  cursor: pointer;
  transition: all;
  border-radius: 10px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03) translateZ(0);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const FilmPoster = styled.img`
  border-radius: inherit;
  box-shadow: 0px 3px 4px 1px rgba(44, 133, 200, 0.2);
  height: 450px;
  max-width: 300px;
`;

export const FilmTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  max-width: 300px;
`;
