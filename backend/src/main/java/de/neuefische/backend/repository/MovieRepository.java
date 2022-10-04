package de.neuefische.backend.repository;

import de.neuefische.backend.model.Movie;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class MovieRepository {

    Map<String, Movie> movies = new HashMap<>(
            Map.of(
                    "1", new Movie("1", "Battle Royale", "https://m.media-amazon.com/images/I/51vRjnm3mTL._AC_SY580_.jpg", false),
                    "2", new Movie("2", "Oldboy", "https://m.media-amazon.com/images/I/51qPuRALb5L._AC_.jpg", false),
                    "3", new Movie("3", "Pulp Fiction", "https://img.posterlounge.de/images/l/1875927.jpg", false),
                    "4", new Movie("4", "Léon", "https://www.closeup.de/media/oart_0/oart_l/oart_13736/1022950_G297101.JPG", false),
                    "5", new Movie("5", "Edward Scissorhands", "https://m.media-amazon.com/images/I/51GyBnj7wiL._AC_.jpg", false),
                    "6", new Movie("6", "Back to the Future", "https://i.etsystatic.com/30490360/r/il/900f92/4052325689/il_fullxfull.4052325689_qxhc.jpg", false)
            )
    );

    public List<Movie> getAllMovies() {
        return new ArrayList<>(movies.values());
    }

    public Movie getMovieById(String id) {
        return movies.get(id);
    }

    public Movie addMovie(Movie movie) {
        movies.put(movie.getId(), movie);
        return movie;
    }

    public void deleteMovieById(String id) {
        movies.remove(id);
    }


    public Movie updateMovie(Movie movie) {
        movies.put(movie.getId(), movie);
        return movie;
    }
}
