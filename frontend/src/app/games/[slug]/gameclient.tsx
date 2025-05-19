'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import { Game } from '@/interfaces/game';

export default function GameDetailClient({ game }: { game: Game }) {
    const router = useRouter();

    const formatImageUrl = (url?: string, size: string = 't_cover_big') => {
        if (!url) return '/placeholder-game.jpg';
        return url.replace('//images.igdb.com', 'https://images.igdb.com').replace('t_thumb', size);
    };

    const formatReleaseDate = (timestamp?: number) => {
        if (!timestamp) return 'TBA';
        return new Date(timestamp * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex items-center mb-6">
                    <button
                        className="bg-game-gray hover:bg-game-light text-white px-4 py-2 rounded transition-colors"
                        onClick={() => router.back()}
                    >
                        ← Back
                    </button>
                    <h1 className="text-3xl font-bold text-white ml-5">{game.name}</h1>
                </div>

                <div className="grid md:grid-cols-[300px_1fr] gap-6 mb-10">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        {game.cover?.url ? (
                            <Image
                                src={formatImageUrl(game.cover.url, 't_cover_big')}
                                alt={game.name}
                                width={264}
                                height={374}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        ) : (
                            <div className="w-full h-[425px] bg-game-light flex items-center justify-center text-gray-400 text-base">
                                No image available
                            </div>
                        )}
                    </div>

                    <div className="text-gray-200">
                        {game.rating && (
                            <div className="flex items-center mb-5">
                                <div className="text-lg font-semibold mr-3">Rating:</div>
                                <div className="bg-green-600 text-white px-3 py-1 rounded font-bold text-base">
                                    {Math.round(game.rating)}%
                                </div>
                            </div>
                        )}

                        {game.first_release_date && (
                            <div className="mb-4">
                                <span className="block font-semibold mb-1 text-gray-400">Release Date:</span>
                                <span>{formatReleaseDate(game.first_release_date)}</span>
                            </div>
                        )}

                        {game.genres && game.genres.length > 0 && (
                            <div className="mb-4">
                                <span className="block font-semibold mb-1 text-gray-400">Genres:</span>
                                <div className="flex flex-wrap gap-2">
                                    {game.genres.map((genre, index) => (
                                        <span key={index} className="bg-game-light px-3 py-1 rounded text-sm">
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {game.summary && (
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">Summary</h3>
                                <p className="text-gray-300 leading-relaxed">{game.summary}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}