import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <Card className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name}></img>
      

      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}
        <IconButton color="primary" aria-label="info"  onClick={() => navigate("/movies/" + id)}>
           < InfoIcon/>
      </IconButton>

      <IconButton color="secondary" aria-label="toggle" onClick={(() => { setShow(!show); })}>
           {show ? <ExpandMoreIcon /> : <ExpandLessIcon/> } 
        </IconButton>
      </h2>
        

    
      

        <p className="movie-rating" style={styles}>⭐{movie.rating}</p>
      </div>

      

      {/* <button className="tgl-btn" onClick={(() => { setShow(!show); })}> Toggle </button> */}


      {/* conditional styling */}

      {/* <p className="movie-summary" style={summarystyle}>{movie.summary}</p> */}


      {/* conditinal rendering */}

      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      </CardContent>
      <CardActions>
           <Counter />
      </CardActions>
     
    </Card>

  );
}
