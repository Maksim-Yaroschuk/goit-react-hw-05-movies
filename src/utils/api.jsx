import axios from "axios";

const API_KEY = '029dc938f69f80a53ec2361c42a2c79e';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export const BASE_IMG_URL = `https://image.tmdb.org/t/p`;
export const IMG_W500 = `/w500`;
export const IMG_W400 = `/w400`;
export const IMG_W300 = `/w300`;
export const IMG_W200 = `/w200`;
export const IMG_W100 = `/w100`;
export const IMG_ORIG = `/original`;

export const getTrending = async (page = 1) => {
    const { data } = await axios.get(
        `/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );
    return data;
};

export const getFilmById = async (id) => {
    const { data } = await axios.get(
        `/movie/${id}?api_key=${API_KEY}`
    );
    return data;
};

export const getMovieCast = async id => {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return data;
};

export const getMovieReviews = async id => {
    const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return data;
};

export const getSearchMovie = async (query, page) => {
    const { data } = await axios.get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    );
    return data;
};
