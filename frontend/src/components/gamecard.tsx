import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/interfaces/game';

interface GameCardProps {
game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  // Format IGDB image URL to use HTTPS and appropriately sized images
const formatImageUrl = (url?: string) => {
    if (!url) return '/placeholder-game.jpg';
    return url.replace('//images.igdb.com', 'https://images.igdb.com').replace('t_thumb', 't_cover_big');
};

  // Format release date
const formatReleaseDate = (timestamp?: number) => {
    if (!timestamp) return 'Release date unknown';
    return new Date(timestamp * 1000).toLocaleDateString();
};
return (
    <div className="rounded-lg overflow-hidden bg-game-gray transition-transform hover:translate-y-[-5px] shadow-md h-full flex flex-col">
    <Link href={`/games/${game.slug}`}>
        <div className="relative w-full pt-[133%]">
        {game.cover?.url ? (
            <Image 
            src={formatImageUrl(game.cover.url)} 
            alt={game.name}
            width={264} 
            height={374} 
            layout="responsive"
            className="absolute top-0 left-0 w-full h-full object-cover"
            />
        ) : (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-game-light text-gray-400 text-sm">
            No image available
        </div>
        )}
        {game.rating && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded font-bold">
                        {Math.round(game.rating)}%
                    </div>
                )}
                </div>
                <h3 className="p-3 text-base font-medium m-0 text-white">
                {game.name}
                </h3>
                {game.first_release_date && (
                    <p className="px-3 mb-1 text-sm text-gray-400">
                    {formatReleaseDate(game.first_release_date)}
                    </p>
                )}
                {game.genres && game.genres.length > 0 && (
                    <div className="px-3 pb-3 flex flex-wrap gap-1">
                    {game.genres.slice(0, 3).map((genre, index) => (
                        <span key={index} className="text-xs bg-game-light text-gray-300 px-2 py-1 rounded">
                        {genre.name}
                        </span>
                    ))}
                    </div>
                )}
                </Link>
            </div>
            );};

export default GameCard;
