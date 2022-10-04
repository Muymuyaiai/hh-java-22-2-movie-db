import './MovieCard.css';
import {Movie} from "../model/Movie";
import {NavLink} from "react-router-dom";
import {ChangeEvent, useState} from "react";

type MovieCardProps = {
    movie: Movie
    deleteMovie: (id: string) => void
    updateMovie: (movie: Movie) => void
}

export default function MovieCard(props: MovieCardProps) {

    const changeFavorites = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedMovie: Movie = {...props.movie, favorite: event.target.checked}
        props.updateMovie(updatedMovie)
    }

    return (

        <div className={"card"}>
            <div className={"card-menu"}>
                <label className={"star-wrapper"}>
                    <input onChange={changeFavorites} checked={props.movie.favorite} type="checkbox"
                           className={"star"}/>
                    <div className={"star"}/>
                </label>
                <label className={"delete-wrapper"}>
                    <button onClick={() => props.deleteMovie(props.movie.id)}>x</button>
                    <div className={"trash"}/>
                </label>
            </div>
            <NavLink to={"/api/movie/" + props.movie.id}><img src={props.movie.posterURL} alt="no image"/></NavLink>
            <NavLink to={"/api/movie/" + props.movie.id}><h3>{props.movie.title}</h3></NavLink>
        </div>
    )
}