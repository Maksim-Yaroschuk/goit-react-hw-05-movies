import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast, BASE_IMG_URL, IMG_W200 } from 'utils/api';
import { CastContainer, CastPoster, CastName } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    try {
      getMovieCast(movieId).then(r => {
        setCast(r.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      <CastContainer>
        {cast.map(({ id, original_name, profile_path }) => {
          return (
            <li key={id}>
              <CastPoster
                src={profile_path !== null ? `${BASE_IMG_URL}${IMG_W200}${profile_path}` : 'https://houseofzayn.co.nz/wp-content/uploads/2019/08/nopicture.gif'}
                alt={original_name}
              />
              <CastName>{original_name}</CastName>
            </li>
          );
        })}
      </CastContainer>
    </div>
  );
};

export default Cast;