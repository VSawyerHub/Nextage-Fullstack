import React, { useEffect, useState } from 'react';
import { Game } from '@/interfaces/game';
import { gamesService, ListType } from "@/services/IGDB/game";
import GameCard from './gamecard';

interface GamesListProps {
  listType: ListType;
  limit?: number;
}

const GamesList: React.FC<GamesListProps> = ({
                                               listType,
                                               limit = 12
                                             }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const gamesResult = await gamesService.getGames(listType, limit);
        if ('error' in gamesResult) {
          setError(gamesResult.error);
        } else {
          setGames(gamesResult);
          setError(null);
        }
      } catch (err) {
        setError(`Failed to load ${listType} games. Please try again later.`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [listType, limit]);

  if (loading) {
    return <div className="flex justify-center items-center h-52 text-lg text-gray-400">Loading games...</div>;
  }

  if (error) {
    return <div className="p-4 bg-red-900/20 border border-red-900/30 rounded text-red-500">{error}</div>;
  }

  return (
      <div className="mb-10">
        {games.length === 0 ? (
            <div className="p-10 text-center text-gray-400 bg-game-gray rounded-lg">No games found.</div>
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

export default GamesList;