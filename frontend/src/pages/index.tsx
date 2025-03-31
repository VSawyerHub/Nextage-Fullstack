import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import PopularGames from '../components/popular';
import GameSearch from '../components/gamesearch';
import TestConnection from '../components/test';

const Home: NextPage = () => {
    const [activeTab, setActiveTab] = useState<'popular' | 'search'>('popular');

    return (
        <div className="min-h-screen">
            <Head>
                <title>Game Database | Powered by IGDB</title>
                <meta name="description" content="Browse and search for video games using data from IGDB" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="py-10 text-center">
                <h1 className="text-4xl font-bold text-white">Game Database</h1>
                <p className="text-lg text-gray-400 mt-2">Discover and explore video games from around the world</p>
            </header>

            <main className="max-w-7xl mx-auto px-4 pb-16">
                <div className="flex mb-8 border-b border-game-light">
                    <button
                        className={`px-6 py-3 text-base font-medium transition-colors ${
                            activeTab === 'popular'
                                ? 'text-white border-b-2 border-game-blue'
                                : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => setActiveTab('popular')}
                    >
                        Popular Games
                    </button>
                    <button
                        className={`px-6 py-3 text-base font-medium transition-colors ${
                            activeTab === 'search'
                                ? 'text-white border-b-2 border-game-blue'
                                : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => setActiveTab('search')}
                    >
                        Search Games
                    </button>
                </div>

                <div>
                    {activeTab === 'popular' && <PopularGames />}
                    {activeTab === 'search' && <GameSearch />}
                </div>

                {/* Added TestConnection component */}
                <div className="mt-8">
                    <TestConnection />
                </div>
            </main>

            <footer className="py-8 text-center text-gray-500 text-sm">
                <p>
                    Data provided by{' '}
                    <a
                        href="https://www.igdb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-game-blue hover:underline"
                    >
                        IGDB.com
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Home;
