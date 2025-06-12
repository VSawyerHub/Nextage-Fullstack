'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import { Game } from '@/interfaces/game';
import styled from 'styled-components';

// Retro styled components for game detail page
const RetroButton = styled.button`
  background: #19181c;
  color: #fff;
  border: 2px solid #19181c;
  border-radius: 0;
  padding: 0.5rem 1rem;
  font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.1s;
  &:hover {
    background: #232136;
    color: #00c6fb;
  }
`;

const RetroCard = styled.div`
  border: 4px double #19181c;
  box-shadow: 0 0 0 4px #ededed, 0 8px 24px rgba(0,0,0,0.4);
  background: var(--background);
  padding: 1rem;
`;

const RetroTag = styled.span`
  background: #19181c;
  color: #fff;
  border: 2px solid #19181c;
  padding: 0.25rem 0.5rem;
  font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
  font-size: 0.7rem;
`;

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
                    <RetroButton onClick={() => router.back()}>
                        ← Back
                    </RetroButton>
                    <h1 className="text-3xl font-bold text-white ml-5" style={{ fontFamily: "'Press Start 2P', 'Courier New', monospace", fontSize: '1.5rem' }}>
                        {game.name}
                    </h1>
                </div>

                <RetroCard className="grid md:grid-cols-[300px_1fr] gap-6 mb-10">
                    <div className="relative rounded-lg overflow-hidden">
                        {game.cover?.url ? (
                            <Image
                                src={formatImageUrl(game.cover.url, 't_cover_big')}
                                alt={game.name}
                                width={264}
                                height={374}
                                style={{ width: '100%', height: 'auto', imageRendering: 'pixelated' }}
                            />
                        ) : (
                            <div className="w-full h-[425px] bg-game-light flex items-center justify-center text-gray-400 text-base" style={{ fontFamily: "'Press Start 2P', 'Courier New', monospace", fontSize: '0.8rem' }}>
                                No image available
                            </div>
                        )}
                    </div>

                    <div className="text-gray-200" style={{ fontFamily: "'Press Start 2P', 'Courier New', monospace", fontSize: '0.8rem' }}>
                        {game.rating && (
                            <div className="flex items-center mb-5">
                                <div className="text-lg font-semibold mr-3">Rating:</div>
                                <RetroTag>
                                    {Math.round(game.rating)}%
                                </RetroTag>
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
                                        <RetroTag key={index}>
                                            {genre.name}
                                        </RetroTag>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Display platforms if available */}
                        {game.platforms && game.platforms.length > 0 && (
                            <div className="mb-4">
                                <span className="block font-semibold mb-1 text-gray-400">Platforms:</span>
                                <div className="flex flex-wrap gap-2">
                                    {game.platforms.map((platform, index) => (
                                        <RetroTag key={index}>
                                            {platform.name}
                                        </RetroTag>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Display game modes if available */}
                        {game.game_modes && game.game_modes.length > 0 && (
                            <div className="mb-4">
                                <span className="block font-semibold mb-1 text-gray-400">Game Modes:</span>
                                <div className="flex flex-wrap gap-2">
                                    {game.game_modes.map((mode, index) => (
                                        <RetroTag key={index}>
                                            {mode.name}
                                        </RetroTag>
                                    ))}
                                </div>
                            </div>
                        )}

                        {game.summary && (
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">Summary</h3>
                                <p className="text-gray-300 leading-relaxed" style={{ lineHeight: "1.5" }}>
                                    {game.summary}
                                </p>
                            </div>
                        )}
                    </div>
                </RetroCard>

                {/* Screenshots section if available */}
                {game.screenshots && game.screenshots.length > 0 && (
                    <RetroCard className="mt-6 p-4">
                        <h3 className="text-xl font-semibold mb-4 text-white" style={{ fontFamily: "'Press Start 2P', 'Courier New', monospace" }}>
                            Screenshots
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {game.screenshots.map((screenshot, index) => (
                                <div key={index} className="relative h-48 overflow-hidden">
                                    <Image
                                        src={formatImageUrl(screenshot.url, 't_screenshot_big')}
                                        alt={`${game.name} screenshot ${index + 1}`}
                                        fill
                                        style={{ objectFit: 'cover', imageRendering: 'pixelated' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </RetroCard>
                )}

                {/* Websites/links section if available */}
                {game.websites && game.websites.length > 0 && (
                    <RetroCard className="mt-6 p-4">
                        <h3 className="text-xl font-semibold mb-4 text-white" style={{ fontFamily: "'Press Start 2P', 'Courier New', monospace" }}>
                            Links
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {game.websites.map((website, index) => (
                                <a
                                    key={index}
                                    href={website.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <RetroButton>
                                        {website.website_type}
                                    </RetroButton>
                                </a>
                            ))}
                        </div>
                    </RetroCard>
                )}
            </div>
        </>
    );
}