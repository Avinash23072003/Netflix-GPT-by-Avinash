import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CALL } from "../utils/constans";
import { upcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const newUpcomingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_CALL
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(upcomingMovies(json.results));
  };
  useEffect(() => {
    newUpcomingmovies();
  }, []);
};
export default useUpcomingMovies;
