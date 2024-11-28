package com.nextage.Nextage_BackEnd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.nextage.Nextage_BackEnd.Model.Game;
import java.util.List;
import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    Optional<Game> findByIgdbId(Long igdbId);
    List<Game> findByNameContainingIgnoreCase(String name);
    List<Game> findByGenresName(String genreName);
    List<Game> findByPlatformsName(String platformName);

    @Query("SELECT g FROM Game g WHERE g.totalRating >= :minRating")
    List<Game> findByMinimumRating(@Param("minRating") Double minRating);
}
