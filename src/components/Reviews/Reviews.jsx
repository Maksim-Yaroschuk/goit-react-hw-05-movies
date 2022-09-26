import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'utils/api';
import { ReviewsContainer } from './Reviews.styled';
import { Message } from 'pages/Movies/Movies.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(r => {
        setReviews(r.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      {!reviews.length && <Message>Sorry! Information not found</Message>}
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
