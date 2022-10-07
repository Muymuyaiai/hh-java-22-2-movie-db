import './MovieGallery.css';
import {Movie} from "../model/Movie"
import {ChangeEvent, useState} from "react";
import MovieCard from './MovieCard';

type MovieGalleryProps = {
    movies: Movie[]
    deleteMovie: (id: string) => void
    updateMovie: (movie: Movie) => void
}

export default function MovieGallery(props: MovieGalleryProps) {
    const [search, setSearch] = useState("");
    const [isFav, setIsFav] = useState(false);

    const mapMovies = (movies: Movie[]) => {
        return movies.map((movie) => <MovieCard movie={movie} deleteMovie={props.deleteMovie}
                                                updateMovie={props.updateMovie}/>)
    }
    const searchMovies = (movies: Movie[]) => {
        return movies.filter(({title}) => title.toLowerCase().includes(search.toLowerCase()))
    }

    const changeFav = (event: ChangeEvent<HTMLInputElement>) => {
        setIsFav(event.target.checked)
    }

    const movieExists = (searchMovies(props.movies).length !== 0)
    return (
        <div className={"gallery"}>
            <div className={"search"}>
                <input onChange={(event) => setSearch(event.target.value)} placeholder="search"/>
                <label className={"toggler-wrapper style-1"}>
                    <input className="content" onChange={changeFav} type="checkbox"/>
                    <div className={"toggler-slider"}>
                        <div className={"toggler-knob"}></div>
                    </div>
                </label>
            </div>
            <div className={"cards"}>
                {isFav ?
                    mapMovies(searchMovies(props.movies.filter(({favorite}) => favorite)))
                    : mapMovies(searchMovies(props.movies))
                }
            </div>
        </div>
    )
}