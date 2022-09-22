import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast, BASE_IMG_URL, IMG_W200 } from 'utils/api';
import { toast } from 'react-toastify';
import { CastContainer, CastPoster, CastName } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const movieId = useOutletContext();

  console.log(movieId);

  useEffect(() => {
    try {
      getMovieCast(movieId).then(r => {
        setCast(r.cast);
      });
    } catch (error) {
      toast.error(error, { autoClose: 1000 });
    }
  }, [movieId]);

  return (
    <div>
      <CastContainer>
        {cast.map(({ id, original_name, profile_path }) => {
          return (
            <li key={id}>
              <CastPoster
                src={`${BASE_IMG_URL}${IMG_W200}${profile_path}`}
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
