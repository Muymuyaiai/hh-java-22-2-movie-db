import axios from "axios";
import {useEffect, useState} from "react";
import {Movie} from "../model/Movie";


export default function useMovies(){
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        getMovies()
    }, [])

    const getMovies = () => {
        axios.get("/api/movie")
            .then((response) => response.data)
            .then((movies) => setMovies(movies))
            .catch((error) => console.error(error))
    }

    const addMovie = (newMovie:Movie) => {
        axios.post("/api/movie", newMovie)
            .then(getMovies)
    }

    const deleteMovie = (id: string) => {
        axios.delete("/api/movie/" + id)
            .then(getMovies)
    }

    const updateMovie = (updatedMovie:Movie) => {
        axios.put("/api/movie/"+ updatedMovie.id, updatedMovie)
            .then(getMovies)
    }

    return {movies, getMovies, addMovie, deleteMovie, updateMovie}
}