import React, { useEffect, useState } from 'react';
import { Game } from '@/interfaces/game';
import { gamesService } from "@/services/IGDB/games";
import GameCard from './gamecard';

const PopularGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        setLoading(true);
        const popularGames = await gamesService.getPopularGames(12);
        if ('error' in popularGames) {
          setError(popularGames.error);
        } else {
          setGames(popularGames);
          setError(null);
        }
      } catch (err) {
        setError('Failed to load popular games. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPopularGames();

  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-52 text-lg text-gray-400">Loading popular games...</div>;
  }

  if (error) {
    return <div className="p-4 bg-red-900/20 border border-red-900/30 rounded text-red-500">{error}</div>;
  }

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-white">Popular Games</h2>
      
      {games.length === 0 ? (
        <div className="p-10 text-center text-gray-400 bg-game-gray rounded-lg">No popular games found.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {games.map((game) => (
            <div key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularGames;