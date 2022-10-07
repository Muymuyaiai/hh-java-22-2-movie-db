import './App.css';

import MovieGallery from "./component/MovieGallery";
import useMovies from './hooks/useMovies';
import {HashRouter, Route, Routes} from "react-router-dom";
import CreateMovie from "./component/CreateMovie";
import MovieDetails from './component/MovieDetails';

function App() {

    const {movies, getMovies, addMovie, deleteMovie, updateMovie} = useMovies()

    return (
        <div className="App">
            <header className="App-header">
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <h1>Movie DB</h1>
                <HashRouter>

                    <Routes>
                        <Route path={"/"} element={
                            <div>
                                {(movies.length !== 0) || <p>No movies in database!</p>}
                                <MovieGallery movies={movies} deleteMovie={deleteMovie} updateMovie={updateMovie}/>
                                <CreateMovie addMovie={addMovie}/>
                            </div>}/>
                        <Route path={"/api/movie/:id"} element={
                            <MovieDetails movies={movies}/>
                        }/>
                    </Routes>
                </HashRouter>


            </header>
        </div>
    );
}

export default App;
