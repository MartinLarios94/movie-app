import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

interface useMoviesProps {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

const useMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieStates, setMovieStates] = useState<useMoviesProps>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });
  const getMovies = async () => {
    const nowPlaying = movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popular = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRated = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upComing = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const resp = await Promise.all([nowPlaying, popular, topRated, upComing]);

    setMovieStates({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upComing: resp[3].data.results,
    });

    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...movieStates,
    isLoading,
  };
};

export default useMovie;
