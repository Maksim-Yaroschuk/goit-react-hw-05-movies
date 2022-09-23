import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'utils/api';
import { toast } from 'react-toastify';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const movieId = useOutletContext();

  console.log(movieId);

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(r => {
        setReviews(r.results);
      });
    } catch (error) {
      toast.error(error, { autoClose: 1000 });
    }
  }, [movieId]);

  return (
    <div>
      <ReviewsContainer>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
      </ReviewsContainer>
    </div>
  );
};

export default Reviews;
