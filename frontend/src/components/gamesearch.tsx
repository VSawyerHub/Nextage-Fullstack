import React, { useState } from 'react';
import { Game } from '@/interfaces/game';
import { gamesService } from "@/services/IGDB/games";
import GameCard from './gamecard';

const GameSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError('Please enter a search term');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const results = await gamesService.searchGames(searchQuery);
      setGames(results);
      setSearched(true);
    } catch (err) {
      setError('Error searching for games. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-5 text-white">Search Games</h2>
      
      <form onSubmit={handleSearch} className="flex mb-6 max-w-xl">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for games..."
          className="flex-1 p-3 bg-game-light border-none rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-game-blue"
        />
        <button 
          type="submit" 
          className="bg-game-blue hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-r-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <div className="p-3 mb-5 bg-red-900/20 border border-red-900/30 rounded-md text-red-400">{error}</div>}

      {loading && <div className="text-center p-5 text-gray-400">Searching for games...</div>}

      {searched && !loading && games.length === 0 && (
        <div className="text-center p-8 bg-game-gray rounded-md text-gray-400">No games found for "{searchQuery}"</div>
      )}

      {games.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Search Results</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {games.map((game) => (
              <div key={game.id}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameSearch;