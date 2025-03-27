import { IGDBService } from "./services/IGDBsrvcs";
import dotenv from 'dotenv';

dotenv.config();

async function testIGDBConnection() {
    try {
        console.log('Testing IGDB API connection...');
        console.log('Fetching popular games...');

        const games = await IGDBService.getPopularGames(5);
        console.log('Successfully retrieved games:');
        console.log(JSON.stringify(games, null, 2));

        if (games.length > 0) {
            const gameId = games[0].id;
            console.log(`\nFetching details for game ID: ${gameId}`);
            const gameDetails = await IGDBService.getGameById(gameId);
            console.log('Game details:');
            console.log(JSON.stringify(gameDetails, null, 2));
        }

        console.log('\nIGDB API integration is working correctly!');
    } catch (error) {
        console.error('IGDB API test failed:', error);
    }
}

testIGDBConnection();