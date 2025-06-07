'use client';

import Games from '../components/games/games';
import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <div className="crt-bg min-h-screen">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4">
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Recently Released</h2>
                    <Games listType="recentlyReleased" limit={10} />
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Most Anticipated</h2>
                    <Games listType="mostAnticipated" limit={10} />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Upcoming</h2>
                    <Games listType="upcoming" limit={10} />
                </section>
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
}