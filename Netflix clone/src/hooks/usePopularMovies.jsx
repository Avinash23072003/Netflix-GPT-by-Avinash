import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CALL } from "../utils/constans";
import { popularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const playingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_CALL
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(popularMovies(json.results));
  };
  useEffect(() => {
    playingMovies();
  }, []);
};
export default usePopularMovies;
