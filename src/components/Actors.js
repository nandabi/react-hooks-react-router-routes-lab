import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((actor,index) => (
      <div key={index}>
        <h1>Name: {actor.name}</h1>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie, movieIndex) => (
            <li key={movieIndex}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>;
}

export default Actors;
