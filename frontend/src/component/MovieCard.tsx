import './MovieCard.css';
import { Movie } from "../model/Movie";
import {NavLink} from "react-router-dom";
import {ChangeEvent, useState} from "react";

type MovieCardProps = {
    movie: Movie
    deleteMovie: (id: string) => void
    updateMovie: (movie: Movie) => void
}

export default function MovieCard(props: MovieCardProps){


    const changeFavorites = (event: ChangeEvent<HTMLInputElement>) => {

         const updatedMovie:Movie = {...props.movie, favorite: event.target.checked}


        props.updateMovie(updatedMovie)
    }

    return(
        <div>
            <img src={props.movie.posterURL} alt="no image"/>
            <p>{props.movie.title}</p>
            <NavLink to={"/api/movie/"+ props.movie.id}>Details</NavLink>
            <button onClick={() => props.deleteMovie(props.movie.id)}>delete</button>
            <input onChange={changeFavorites} checked={props.movie.favorite} type="checkbox" name="favorite"/>
        </div>
    )
}