package de.neuefische.backend.controller;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.model.MovieDTO;
import de.neuefische.backend.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {this.movieService = movieService;}

    @GetMapping
    public List<Movie> getAllMovies() {return movieService.getAllMovies();}

    @PostMapping
    public Movie addMovie(@RequestBody MovieDTO movie) {return movieService.addMovie(movie);}

    @DeleteMapping(path="/{id}")
    public void deleteMovieById(@PathVariable String id) {movieService.deleteMovieById(id);}

    @PutMapping(path="/{id}")
    public Movie updateMovie(@RequestBody Movie movie) {return movieService.updateMovie(movie);}

}
