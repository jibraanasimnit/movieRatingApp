import React from "react";
import { useState } from "react";

const MovieRating = () => {
    const [MovieRatings, setMovieRating] = useState([])
    const [newMovieName, setnewMovieName] = useState('')
    const [newMovieRating, setnewMovieRating] = useState('')
    
        const addMovie = (e) => {
            setnewMovieName('')
            const selectedMovie = e.target.value
            setnewMovieName({name:selectedMovie})
    
        }
        
        const addRating = (e) => {
            
            setnewMovieRating('')
            const selectedRating = e.target.value
            setnewMovieRating({rating:selectedRating})
            
        }

        const submitRating = ()=>{
            if(newMovieName != '' || newMovieRating != ''){
             setMovieRating([{name : newMovieName, rating : newMovieRating},...MovieRatings])
            }
            
            
        }

        

        
  return (
    <>
      <div className="ratingBox">
      <label>movie name: </label>
        <select onChange={addMovie} id="moviesName">
        <option  value="movie name">movie name</option>
          <option value="godfather">godfather</option>
          <option value="dark knight">dark knight</option>
          <option value="pulp fiction">pulp fiction</option>
          <option value="7 angry men">7 angry men</option>
        </select>
        <label> your rating :  </label>
        <select onChange={addRating} id="rating">
        <option  value="select rating">select rating</option>
          <option  value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <button onClick={submitRating}>submit</button>
        
        {MovieRatings.map((movierating) => (
            <li>
              {movierating.name.name} : {movierating.rating.rating}
            </li>
            ))}
      </div>
    </>
  );
};

export default MovieRating;
