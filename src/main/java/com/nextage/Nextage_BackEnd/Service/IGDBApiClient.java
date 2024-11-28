package com.nextage.Nextage_BackEnd.Service;

import com.nextage.Nextage_BackEnd.GameDTO;
import com.nextage.Nextage_BackEnd.Model.Game;
import okhttp3.*;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.List;

@Service
@Slf4j
public class IGDBApiClient {
    private final OkHttpClient httpClient;
    private final Gson gson;
    private final GameService gameService;

    @Value("${igdb.client.id}")
    private String clientId;

    @Value("${igdb.client.secret}")
    private String clientSecret;

    private String accessToken;

    @Autowired
    public IGDBApiClient(GameService gameService) {
        this.httpClient = new OkHttpClient();
        this.gson = new Gson();
        this.gameService = gameService;
    }

    // Authenticate and get access token
    public String getAccessToken() throws IOException {
        HttpUrl url = HttpUrl.parse("https://id.twitch.tv/oauth2/token")
                .newBuilder()
                .addQueryParameter("client_id", clientId)
                .addQueryParameter("client_secret", clientSecret)
                .addQueryParameter("grant_type", "client_credentials")
                .build();

        Request request = new Request.Builder()
                .url(url)
                .post(RequestBody.create("", null))
                .build();

        try (Response response = httpClient.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                log.error("Failed to get access token: {}", response);
                throw new IOException("Unexpected code " + response);
            }

            // Parse access token from response
            String responseBody = response.body().string();
            // Use Gson to parse the JSON and extract access token
            // Implement based on the exact response structure
            accessToken = extractAccessTokenFromResponse(responseBody);
            return accessToken;
        }
        catch (IOException e) {
            log.error("Error while getting access token", e);
            throw e;
        }
    }

    // Method to fetch games
    public List<Game> fetchGames(int limit, int offset) throws IOException {
        // Ensure we have a valid access token
        if (accessToken == null) {
            getAccessToken();
        }

        Request request = new Request.Builder()
                .url("https://api.igdb.com/v4/games")
                .addHeader("Client-ID", clientId)
                .addHeader("Authorization", "Bearer " + accessToken)
                .post(RequestBody.create(
                        "fields id,name,summary,first_release_date,total_rating,total_rating_count," +
                                "genres.name,platforms.name,cover.url;" +
                                "limit " + limit + ";" +
                                "offset " + offset + ";",
                        MediaType.parse("text/plain")
                ))
                .build();

        try (Response response = httpClient.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                log.error("Failed to fetch games: {}", response);
                throw new IOException("Unexpected code " + response);
            }

            String responseBody = response.body().string();
            // Convert response to List of Games
            return parseGamesFromResponse(responseBody);
        } catch (IOException e) {
            log.error("Error while fetching games", e);
            throw e;
        }
    }

    // Sync games to database
    public void syncGamesToDatabase(List<Game> games) {
        for (Game game : games) {
            try {
                gameService.saveOrUpdateGame(convertToGameDTO(game));
            } catch (Exception e) {
                log.error("Error while syncing game to database: {}", game, e);
            }
        }
    }

    // Helper methods to parse response and convert to your entities
    private String extractAccessTokenFromResponse(String responseBody) {
        // Implement JSON parsing to extract access token
        // This will depend on the exact response structure
        return null; // Replace with actual implementation
    }

    private List<Game> parseGamesFromResponse(String responseBody) {
        // Use Gson to parse the JSON response into Game objects
        // This requires creating a matching Game class that matches IGDB API response
        return null; // Replace with actual implementation
    }

    private GameDTO convertToGameDTO(Game igdbGame) {
        // Convert IGDB Game to your GameDTO
        return null; // Replace with actual implementation
    }
}