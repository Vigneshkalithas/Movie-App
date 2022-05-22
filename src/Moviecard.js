import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Moviecard({ movie, id }) {
  const [show, setShow] = useState(true);


  const styles = {
    color: movie.rating > 8 ? "green" : "red"
  };

  const summarystyle = {
    display: show ? "block" : "none"
  };

  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name}></img>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p className="movie-rating" style={styles}>⭐{movie.rating}</p>
      </div>
      <button onClick={() => navigate("/movies/" + id)}>Info</button>
      <button className="tgl-btn" onClick={(() => { setShow(!show); })}> Toggle </button>


      {/* conditional styling */}

      {/* <p className="movie-summary" style={summarystyle}>{movie.summary}</p> */}


      {/* conditinal rendering */}

      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      <Counter />
    </div>

  );
}
