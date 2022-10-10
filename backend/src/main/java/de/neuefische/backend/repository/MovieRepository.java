package de.neuefische.backend.repository;

import de.neuefische.backend.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends MongoRepository <Movie, String> {
}
