import {Movie} from "../model/Movie";
import {ChangeEvent, FormEvent, useState} from "react";

type CreateMovieProps = {
    addMovie: (newMovie: Movie) => void;
}

export default function CreateMovie(props: CreateMovieProps) {

    const emptyMoviePlaceholder: Movie = {
        id: "",
        title: "",
        posterURL: "",
        favorite: false
    }

    const [movie, setMovie] = useState(emptyMoviePlaceholder)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMovie(movie => ({
            ...movie,
            [event.target.name]:
            event.target.value
        }))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.addMovie(movie)
        setMovie(emptyMoviePlaceholder)
    }

    return (
        <div>
        <p>Add Movie</p>
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={movie.title}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="text"
                    name="posterURL"
                    placeholder="Poster URL"
                    value={movie.posterURL}
                    onChange={handleChange}
                />
            </label>
            <button type={"submit"}>Add movie</button>
        </form>
        </div>
    )
}