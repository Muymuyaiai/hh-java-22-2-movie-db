package de.neuefische.backend.service;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.model.MovieDTO;
import de.neuefische.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class MovieService {

    private final MovieRepository movieRepository;
    private final IdService idService;

    @Autowired
    public MovieService(MovieRepository movieRepository, IdService idService) {

        this.movieRepository = movieRepository;
        this.idService = idService;
    }

    public List<Movie> getAllMovies() {
        return movieRepository.getAllMovies();
    }

    public Movie addMovie(MovieDTO movie) {
        Movie newMovie = Movie.builder()
                .id(idService.generateID())
                .title(movie.getTitle())
                .posterURL(movie.getPosterURL())
                .favorite(false)
                .build();
        return movieRepository.addMovie(newMovie);
    }

    public void deleteMovieById(String id) {
        if (movieRepository.getMovieById(id) == null)
            throw new NoSuchElementException();
        movieRepository.deleteMovieById(id);
    }

    public Movie updateMovie(Movie movie) {
        return movieRepository.updateMovie(movie);
    }
}
