import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';

const GameSearch: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        if (router.query.search && typeof router.query.search === 'string') {
            setSearchQuery(router.query.search);
        }
    }, [router.query.search]);
    return (
        <div className="w-full">
        <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const searchTerm = formData.get('search') as string;

              // Force a reload with the search parameter, even if it's the same
              router.push({
                pathname: '/database',
                query: { search: searchTerm, t: Date.now() }
              });
            }}
            className="flex max-w-md flex-1 mx-4"
        >
          <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              maxLength={24}
              placeholder="Search for games..."
              className="flex-1 p-2 bg-game-light border-none rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-game-blue"
          />
          <button
              type="submit"
              className="bg-game-blue hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-r-md transition-colors"
          >
            Search
          </button>
        </form>
      </div>
  );
};

export default GameSearch;