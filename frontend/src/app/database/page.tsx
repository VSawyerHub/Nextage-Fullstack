'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Game } from '@/interfaces/game';
import { gamesService, ListType } from "@/services/IGDB/game";
import Gamepreview from '@/components/games/gamepreview';
import Navbar from '@/components/navbar';

function GamesDatabaseContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search');

    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [listType, setListType] = useState<ListType>('recentlyReleased');
    const [filters, setFilters] = useState({
        genre: '',
        platform: '',
        sort: 'popularity'
    });

    // New pagination state
    const [page, setPage] = useState<number>(0); // 0-based page index
    const [pageSize] = useState<number>(20); // how many games per page
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    // Reset list and pagination when search or listType changes
    useEffect(() => {
        setGames([]);
        setPage(0);
        setHasMore(true);
    }, [search, searchParams.get('t'), listType]);

    // Load games whenever search / listType / page changes
    useEffect(() => {
        const loadGames = async () => {
            const isFirstPage = page === 0;
            if (isFirstPage) {
                setLoading(true);
                setError(null);
            } else {
                setIsLoadingMore(true);
            }

            try {
                const offset = page * pageSize;
                let results;

                if (search && search.trim() !== '') {
                    // Use backend pagination: limit + offset
                    results = await gamesService.searchGames(search, pageSize, offset);
                } else {
                    // For now, listType view still uses simple limit-based list
                    // You could also add offset support to IGDBService.getGames later
                    results = await gamesService.getGames(listType, pageSize);
                }

                if (results && Array.isArray(results)) {
                    if (isFirstPage) {
                        setGames(results);
                    } else {
                        setGames(prev => [...prev, ...results]);
                    }

                    // If we received fewer than pageSize items, there are no more pages
                    setHasMore(results.length === pageSize);
                    setError(null);
                } else if (results && 'error' in results) {
                    if (isFirstPage) {
                        setGames([]);
                        setHasMore(false);
                    }
                    setError(results.error);
                } else {
                    if (isFirstPage) {
                        setGames([]);
                        setHasMore(false);
                    }
                    setError('Unexpected response format');
                }
            } catch (err) {
                console.error('Error loading games:', err);
                if (page === 0) {
                    setGames([]);
                }
                setHasMore(false);
                setError('Failed to load games. Please try again.');
            } finally {
                setLoading(false);
                setIsLoadingMore(false);
            }
        };

        loadGames();
    }, [search, searchParams.get('t'), listType, page, pageSize]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleListTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setListType(e.target.value as ListType);
    };

    const handleClearFilters = () => {
        setFilters({
            genre: '',
            platform: '',
            sort: 'popularity'
        });
        setListType('recentlyReleased');
        if (search) {
            router.push('/database');
        }
    };

    const handleLoadMore = () => {
        if (!hasMore || isLoadingMore) return;
        setPage(prev => prev + 1);
    };

    return (
        <div className="crt-bg min-h-screen">
            <Navbar />

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
                            name="listType"
                            value={listType}
                            onChange={handleListTypeChange}
                            className="bg-game-light text-white p-2 rounded-md border border-gray-700"
                        >
                            <option value="thisMonth">This Month</option>
                            <option value="recentlyReleased">Recently Released</option>
                            <option value="mostAnticipated">Most Anticipated</option>
                            <option value="upcoming">Upcoming</option>
                        </select>

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

                {loading && games.length === 0 ? (
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
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {games.map((game) => (
                                <Link key={game.id} href={`/games/${game.slug}`}>
                                    <Gamepreview game={game} />
                                </Link>
                            ))}
                        </div>

                        {/* Load more for search results */}
                        {hasMore && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={handleLoadMore}
                                    disabled={isLoadingMore}
                                    className="px-6 py-2 bg-game-light text-white rounded-md border border-gray-700 hover:bg-game-gray disabled:opacity-50"
                                >
                                    {isLoadingMore ? 'Loading more...' : 'Load more'}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}

export default function GamesDatabase() {
    return (
        <Suspense fallback={<div className="text-center p-10 text-game-blue">Loading...</div>}>
            <GamesDatabaseContent />
        </Suspense>
    );
}