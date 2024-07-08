import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CALL } from "../utils/constans";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowMoviesPlaying = () => {
  const dispatch = useDispatch();
  const playingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_CALL
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    playingMovies();
  }, []);
};
export default useNowMoviesPlaying;
