import { MOVIE_CDN_URL } from "../utils/constans";

const MovieCards = ({ poster }) => {
  return (
    <div>
      <img src={MOVIE_CDN_URL + poster} />
    </div>
  );
};
export default MovieCards;
