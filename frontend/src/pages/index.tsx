import type { NextPage } from 'next';
import Head from 'next/head';
import PopularGames from '../components/popular';
import GameSearch from '../components/gamesearch';

const Home: NextPage = () => {

    return (
        <div className="min-h-screen">
            <Head>
                <title>Nextage</title>
                <meta name="description" content="Browse and search for video games using data from IGDB" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="py-6">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8">
                    <div className="flex-1 max-w-2xl">
                        <GameSearch />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 pb-16">
                <div className="flex mb-8 border-b border-game-light">
                    <PopularGames />
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
