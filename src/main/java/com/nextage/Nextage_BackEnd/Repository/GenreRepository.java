package com.nextage.Nextage_BackEnd.Repository;

import com.nextage.Nextage_BackEnd.Model.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

// GenreRepository.java
@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {
    Optional<Genre> findByIgdbId(Long igdbId);
    Optional<Genre> findByName(String name);
}
