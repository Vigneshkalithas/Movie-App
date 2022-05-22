import "./App.css";
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { useState } from "react";
import { Routes,Route,Link,useNavigate, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { MovieDetails } from "./MovieDetails";







const INTIAL_MOVIE_LIST = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];
  


export default function App() {

  
  const [movieList,setMovieList]=useState(INTIAL_MOVIE_LIST);


return (
    <div className="App">


      <nav>
        <ul>
  
           <li><Link to="/">Home</Link></li>
           <li><Link to="/movies">Movies</Link></li>
           <li><Link to="/color-game">Color Game</Link></li>
           <li><Link to="/add-movie">Add movie</Link></li>
           <li><Link to="/users">Users</Link></li>
           
        </ul>
      </nav>

      
    
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList}/>} />

    {/* user films nu type pannalum movies than poganum athavathu rote name change pannumpothu old userkku kaga navigate panrom  */}

      <Route path="/flims" element={<Navigate replace to="/movies" />} />
      <Route path="/movies/:movieid" element={<MovieDetails movieList={movieList} />} />

      {/* : colon dynamicaly matche toute  colon ku apram enna peru tharomo atha atha than use params la tharanum*/}

      <Route path="/color-game" element={<AddColor />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/add-movie" element={<MovieList />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>




    </div>
  );
}


function MovieList({ movieList, setMovieList }) {
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



function UserList(){

  const users = [{
    name:"Vignesh kalithas",
    pic:"https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
  },
  {
    name : "Lakshmiprabha Kalithas",
    pic : "https://cdn-icons-png.flaticon.com/512/219/219990.png"
  
  },
  {
    name : "Kalithas Ramasamy",
    pic : "https://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_416292/Image/Profile%20pic.png"
  
  },
  ];

  return(
    <div className="user-detail">
   {users.map((user)=>(
     <Msg name={user.name} pic={user.pic} /> 
   ))}

    </div>
  )
}

function Msg({name, pic}){
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hi,{name}😎😊🤞</h1>
      <Counter/>
    </div>
  );
}



export function Moviecard({movie , id}){
  const [show,setShow]=useState(true)
  

  const styles={
    color: movie.rating> 8 ? "green":"red"
  }

  const summarystyle={
display: show ?  "block" : "none"   
  }

  const navigate = useNavigate();
  return(
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name}></img>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p className="movie-rating" style={styles}>⭐{movie.rating}</p>
      </div>
      <button onClick={()=>navigate("/movies/" + id )}>Info</button>
      <button className="tgl-btn" onClick={(()=>{ setShow(!show) })}> Toggle </button> 
       

        {/* conditional styling */}

        {/* <p className="movie-summary" style={summarystyle}>{movie.summary}</p> */}


        {/* conditinal rendering */} 

     { show ? <p className="movie-summary">{movie.summary}</p> : ""}
      <Counter/>
    </div>
    
  )
}

