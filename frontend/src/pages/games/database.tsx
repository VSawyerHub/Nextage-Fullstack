// frontend/src/pages/games/database.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Game } from '@/interfaces/game';
import { gamesService } from "@/services/IGDB/games";
import GameCard from '@/components/gamecard';
import Image from 'next/image';
import Link from 'next/link';

const GamesDatabase: React.FC = () => {
    const router = useRouter();
    const { search } = router.query;

    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState({
        genre: '',
        platform: '',
        sort: 'popularity' // default sort
    });

    // Load games based on search query or default to popular games
    useEffect(() => {
        const loadGames = async () => {
            setLoading(true);
            try {
                let results;
                if (search) {
                    results = await gamesService.searchGames(search as string);
                } else {
                    results = await gamesService.getPopularGames(20); // Fetch more games for database view
                }

                if ('error' in results) {
                    setError(results.error);
                    setGames([]);
                } else {
                    setGames(results);
                    setError(null);
                }
            } catch (err) {
                setError('Failed to load games. Please try again.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadGames();
    }, [search]);

    // Apply filters (this would need to be implemented in your API)
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));

        // In a real implementation, you would call your API with these filters
    };

    // Clear search and filters
    const handleClearFilters = () => {
        setFilters({
            genre: '',
            platform: '',
            sort: 'popularity'
        });
        if (search) {
            router.push('/games/database');
        }
    };

    return (
        <div className="min-h-screen">
            <Head>
                <title>{search ? `Search: ${search}` : 'Games Database'} | Nextage</title>
                <meta name="description" content="Browse our extensive video games database" />
            </Head>

            <header className="py-6 bg-game-gray border-b border-game-light">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-3">
                            <div className="w-10">
                                <Image
                                    src="/logoNT.png"
                                    alt="NT Logo"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </div>
                            <span className="text-xl font-semibold text-white">Nextage</span>
                        </div>
                    </Link>

                    <form action="/games/database" method="get" className="flex max-w-md flex-1 mx-4">
                        <input
                            type="text"
                            name="search"
                            defaultValue={search || ''}
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
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            {search ? `Search: ${search}` : 'Games Database'}
                        </h1>
                        <p className="text-gray-400">
                            {games.length} {games.length === 1 ? 'game' : 'games'} found
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                        <select
                            name="genre"
                            value={filters.genre}
                            onChange={handleFilterChange}
                            className="bg-game-light text-white p-2 rounded-md border border-gray-700"
                        >
                            <option value="">All Genres</option>
                            <option value="action">Action</option>
                            <option value="rpg">RPG</option>
                            <option value="strategy">Strategy</option>
                            {/* Add more genres as needed */}
                        </select>

                        <select
                            name="platform"
                            value={filters.platform}
                            onChange={handleFilterChange}
                            className="bg-game-light text-white p-2 rounded-md border border-gray-700"
                        >
                            <option value="">All Platforms</option>
                            <option value="pc">PC</option>
                            <option value="playstation">PlayStation</option>
                            <option value="xbox">Xbox</option>
                            {/* Add more platforms as needed */}
                        </select>

                        <select
                            name="sort"
                            value={filters.sort}
                            onChange={handleFilterChange}
                            className="bg-game-light text-white p-2 rounded-md border border-gray-700"
                        >
                            <option value="popularity">Popularity</option>
                            <option value="rating">Rating</option>
                            <option value="release">Release Date</option>
                            <option value="name">Name (A-Z)</option>
                        </select>

                        <button
                            onClick={handleClearFilters}
                            className="bg-game-gray hover:bg-gray-700 border border-gray-600 text-gray-300 p-2 rounded-md"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>

                {error && <div className="p-4 mb-5 bg-red-900/20 border border-red-900/30 rounded-md text-red-400">{error}</div>}

                {loading ? (
                    <div className="text-center p-10">
                        <div className="text-game-blue font-semibold">Loading games...</div>
                    </div>
                ) : games.length === 0 ? (
                    <div className="p-10 text-center bg-game-gray rounded-lg">
                        <h3 className="text-xl text-gray-300 mb-2">No games found</h3>
                        <p className="text-gray-400">
                            {search ? `No results for "${search}". Try a different search term.` : 'No games match the selected filters.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {games.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default GamesDatabase;