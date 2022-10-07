import './MovieDetails.css';
import {useParams} from "react-router-dom";
import {Movie} from "../model/Movie";

type MovieCardProps = {
    movies: Movie[]
}

export default function MovieCard(props: MovieCardProps) {
    const params = useParams();
    const id = params.id;

    const movie = props.movies.find((movie) => movie.id === id)

    if (movie === undefined) {
        return <>Movie not found!</>
    }

    return (
        <div className={"details"}>
            <img src={movie.posterURL} alt="no image!"/>
            <h3>{movie.title}</h3>
        </div>
    )
}