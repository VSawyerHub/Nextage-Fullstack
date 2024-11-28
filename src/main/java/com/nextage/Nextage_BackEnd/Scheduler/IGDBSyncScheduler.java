package com.nextage.Nextage_BackEnd.Scheduler;

import com.nextage.Nextage_BackEnd.Service.IGDBApiClient;
import com.nextage.Nextage_BackEnd.Model.Game;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import java.util.List;

@Component
@Slf4j
@RequiredArgsConstructor
public class IGDBSyncScheduler {
    private final IGDBApiClient igdbApiClient;

    @Scheduled(fixedDelayString = "${igdb.sync.interval}")
    public void syncIGDBGames() {
        try {
            int limit = 100;
            int offset = 0;

            while (true) {
                List<Game> games = igdbApiClient.fetchGames(limit, offset);

                if (games.isEmpty()) {
                    break; // No more games to sync
                }

                igdbApiClient.syncGamesToDatabase(games);

                offset += limit;

                // Optional: Add a small delay to avoid rate limiting
                Thread.sleep(1000);
            }

            log.info("IGDB Game Sync Completed");
        } catch (Exception e) {
            log.error("Error during IGDB game sync", e);
        }
    }
}
