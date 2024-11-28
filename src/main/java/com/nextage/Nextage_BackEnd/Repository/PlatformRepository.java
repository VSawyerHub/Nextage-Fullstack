package com.nextage.Nextage_BackEnd.Repository;

import com.nextage.Nextage_BackEnd.Model.Platform;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PlatformRepository extends JpaRepository<Platform, Long> {
    Optional<Platform> findByIgdbId(Long igdbId);
    Optional<Platform> findByName(String name);
}