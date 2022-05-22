import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movieList }) {

  const { movieid } = useParams();
  const navigate = useNavigate();
  const movie = movieList[movieid];
  const styles = {
    color: movie.rating > 8 ? "green" : "red"
  };
  return (

    <div>

      <iframe width="100%"
        height="500"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="movie-detail-container">

        {/* <div>
          <h1>{ movieList.name}</h1>
         
        </div> */}
        {/* <img className="movie-poster" src={movieList.poster} alt={movieList.name}></img> */}

        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating" style={styles}>⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button startIcon={<ArrowBackIosIcon />} className="back-button" variant="contained" onClick={() => (navigate(-1))}>
          Back
        </Button>
      </div>

    </div>
  );
}
