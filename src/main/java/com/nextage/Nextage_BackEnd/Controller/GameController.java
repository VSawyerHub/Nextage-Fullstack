package com.nextage.Nextage_BackEnd.Controller;

import com.nextage.Nextage_BackEnd.GameDTO;
import com.nextage.Nextage_BackEnd.Model.Game;
import com.nextage.Nextage_BackEnd.Service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/games")
@RequiredArgsConstructor

public class GameController {
    private final GameService gameService;

    @PostMapping
    public ResponseEntity<Game> saveGame(@RequestBody GameDTO gameDTO) {
        Game savedGame = gameService.saveOrUpdateGame(gameDTO);
        return ResponseEntity.ok(savedGame);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Game>> searchGames(@RequestParam String name) {
        List<Game> games = gameService.searchGames(name);
        return ResponseEntity.ok(games);
    }

    @GetMapping("/genre/{genreName}")
    public ResponseEntity<List<Game>> getGamesByGenre(@PathVariable String genreName) {
        List<Game> games = gameService.getGamesByGenre(genreName);
        return ResponseEntity.ok(games);
    }

    @GetMapping("/platform/{platformName}")
    public ResponseEntity<List<Game>> getGamesByPlatform(@PathVariable String platformName) {
        List<Game> games = gameService.getGamesByPlatform(platformName);
        return ResponseEntity.ok(games);
    }

    @GetMapping("/rating/{minRating}")
    public ResponseEntity<List<Game>> getGamesByMinimumRating(@PathVariable Double minRating) {
        List<Game> games = gameService.getGamesByMinimumRating(minRating);
        return ResponseEntity.ok(games);
    }
}
