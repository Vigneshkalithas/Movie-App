import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Moviecard } from "./Moviecard";

export function MovieList({ movieList, setMovieList }) {
  // const movieList=INTIAL_MOVIE_LIST;
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = { name, rating, summary, poster, trailer };
    setMovieList([...movieList, newMovie]);
  };

  return (
    <div>
      <div className="add-movie-form">
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
        <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
        <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
        <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
        <TextField id="outlined-basic" label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />



        {/* <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Name"></input>
                <input onChange={(event) => setRating(event.target.value)} type="text" placeholder="Rating"></input>
                <input onChange={(event) => setSummary(event.target.value)} type="text" placeholder="Summary"></input>
                <input onChange={(event) => setPoster(event.target.value)} type="text" placeholder="Poster"></input>
                <input onChange={(event) => setTrailer(event.target.value)} type="text" placeholder="Trailer"></input> */}
        <Button variant="outlined" onClick={addMovie}>Add Movie</Button>


      </div>

      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Moviecard key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>

  );
}
