import {Movie} from "../model/Movie"
import MovieCard from "./MovieCard";
import {useState} from "react";

type MovieGalleryProps = {
    movies: Movie[]
    deleteMovie: (id: string) => void
    updateMovie: (movie: Movie) => void
}

export default function MovieGallery(props: MovieGalleryProps) {
    const [search, setSearch] = useState("");

    const filterMovies = (movie: Movie[]) => {
        return props.movies.filter(({title}) => title.toLowerCase().includes(search.toLowerCase()))
    }

    const movieExists = (filterMovies(props.movies).length != 0)

    return (
        <div>
            <input onChange={(event) => setSearch(event.target.value)} placeholder="search"/>
            {movieExists ?
                <div>
                    {filterMovies(props.movies).map((movie) => <MovieCard movie={movie} deleteMovie={props.deleteMovie} updateMovie={props.updateMovie}/>)}
                </div>
                : <h3>This movie is not in our database!</h3>

            }
        </div>
    )
}