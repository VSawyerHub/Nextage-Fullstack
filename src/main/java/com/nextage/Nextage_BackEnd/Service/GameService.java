package com.nextage.Nextage_BackEnd.Service;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.transaction.annotation.Transactional;
import com.nextage.Nextage_BackEnd.Model.*;
import com.nextage.Nextage_BackEnd.Repository.*;
import com.nextage.Nextage_BackEnd.GameDTO;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor

public class GameService {
    private final GameRepository gameRepository;
    private final GenreRepository genreRepository;
    private final PlatformRepository platformRepository;

    @Transactional
    public Game saveOrUpdateGame(GameDTO gameDTO) {
        Game game = gameRepository.findByIgdbId(gameDTO.getIgdbId())
                .orElse(new Game());

        // Map DTO to entity
        BeanUtils.copyProperties(gameDTO, game, "id", "genres", "platforms");

        // Update timestamps
        if (game.getId() == null) {
            game.setCreatedAt(LocalDateTime.now());
        }
        game.setUpdatedAt(LocalDateTime.now());

        // Set genres
        if (gameDTO.getGenreIds() != null) {
            Set<Genre> genres = gameDTO.getGenreIds().stream()
                    .map(genreRepository::findByIgdbId)
                    .filter(Optional::isPresent)
                    .map(Optional::get)
                    .collect(Collectors.toSet());
            game.setGenres(genres);
        }

        // Set platforms
        if (gameDTO.getPlatformIds() != null) {
            Set<Platform> platforms = gameDTO.getPlatformIds().stream()
                    .map(platformRepository::findByIgdbId)
                    .filter(Optional::isPresent)
                    .map(Optional::get)
                    .collect(Collectors.toSet());
            game.setPlatforms(platforms);
        }

        return gameRepository.save(game);
    }

    public List<Game> searchGames(String name) {
        return gameRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Game> getGamesByGenre(String genreName) {
        return gameRepository.findByGenresName(genreName);
    }

    public List<Game> getGamesByPlatform(String platformName) {
        return gameRepository.findByPlatformsName(platformName);
    }

    public List<Game> getGamesByMinimumRating(Double rating) {
        return gameRepository.findByMinimumRating(rating);
    }
}
