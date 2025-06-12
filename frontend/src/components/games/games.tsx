import React, { useEffect, useState } from 'react';
import { Game } from '@/interfaces/game';
import { gamesService, ListType } from '@/services/IGDB/game';
import Link from 'next/link';
import Gamepreview from './gamepreview';

interface GamesProps {
  listType: ListType;
  limit?: number;
}

const Games: React.FC<GamesProps> = ({ listType, limit = 10 }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await gamesService.getGames(listType, limit);
        if (Array.isArray(data)) {
          setGames(data);
        } else if (data && 'error' in data) {
          setError(data.error);
        }
      } catch (err) {
        setError('Failed to load games');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [listType, limit]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {games.map((game) => (
            <Link key={game.id} href={`/games/${game.slug}`}>
              <Gamepreview game={game} />
            </Link>
        ))}
      </div>
  );
};

export default Games;