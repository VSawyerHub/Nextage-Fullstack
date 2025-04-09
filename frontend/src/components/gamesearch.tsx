// frontend/src/components/gamesearch.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const GameSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    // Redirect to database page with search query
    router.push({
      pathname: '/games/database',
      query: { search: searchQuery }
    });
  };

  return (
      <div className="w-full">
        <form onSubmit={handleSearch} className="flex mb-6 w-full">
          <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for games..."
              className="flex-1 p-3 bg-game-light border-none rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-game-blue"
          />
          <button
              type="submit"
              className="bg-game-blue hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-r-md transition-colors"
          >
            Search
          </button>
        </form>
      </div>
  );
};

export default GameSearch;