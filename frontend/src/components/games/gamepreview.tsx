
import React from 'react';
import Image from 'next/image';
import { Game } from '@/interfaces/game';
import styled from 'styled-components';

const CardContainer = styled.div`
    position: relative;
    clip-path: polygon(
            12px 0,
            100% 0,
            100% calc(100% - 12px),
            calc(100% - 12px) 100%,
            0 100%,
            0 12px
    );
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    background-color: #161616;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
`;

const GameInfo = styled.div`
  padding: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const GameTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const GameMeta = styled.div`
  font-size: 0.85rem;
  color: #a0a0a0;
  margin-top: auto;
`;

const PlatformLogos = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;

const PlatformLogo = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;

interface GameCardProps {
    game: Game;
}

const Gamepreview: React.FC<GameCardProps> = ({ game }) => {
    // Format release date
    const formatReleaseDate = (timestamp?: number): string => {
        if (!timestamp) return 'TBA';
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const displayPlatforms = game.platforms?.slice(0, 4) || [];
    const hasMorePlatforms = game.platforms && game.platforms.length > 4;

    // Fix protocol-relative URLs and use higher quality image
    const formatImageUrl = (url?: string): string => {
        if (!url) return '/images/placeholder-game.jpg';

        // Convert protocol-relative URL to absolute URL
        let formattedUrl = url.startsWith('//') ? `https:${url}` : url;

        // Replace t_thumb with t_cover_big for higher resolution
        return formattedUrl.replace('t_thumb', 't_cover_big');
    };

    // Format platform logo URL
    const formatLogoUrl = (url?: string): string => {
        if (!url) return '/images/placeholder-platform.png';

        // Convert protocol-relative URL to absolute URL
        let formattedUrl = url.startsWith('//') ? `https:${url}` : url;

        return formattedUrl;
    };

    return (
        <CardContainer>
            <ImageContainer>
                <Image
                    src={formatImageUrl(game.cover?.url)}
                    alt={game.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </ImageContainer>

            <GameInfo>
                <GameTitle>{game.name}</GameTitle>
                <GameMeta>
                    {game.first_release_date && (
                        <div>{formatReleaseDate(game.first_release_date)}</div>
                    )}

                    <PlatformLogos>
                        {displayPlatforms.map((platform, index) =>
                            platform.platform_logo?.url ? (
                                <PlatformLogo key={platform.id || index}>
                                    <Image
                                        src={formatLogoUrl(platform.platform_logo.url)}
                                        alt={platform.name}
                                        fill
                                        sizes="16px"
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />
                                </PlatformLogo>
                            ) : (
                                <span key={platform.id || index} className="text-xs">
                                    {platform.name.substring(0, 2)}
                                </span>
                            )
                        )}
                        {hasMorePlatforms && <span className="text-xs">+</span>}
                    </PlatformLogos>

                    {displayPlatforms.length > 0 && (
                        <div className="mt-1 text-xs">
                            {displayPlatforms.map(platform => platform.name).join(', ')}
                            {hasMorePlatforms ? ' +' : ''}
                        </div>
                    )}
                </GameMeta>
            </GameInfo>
        </CardContainer>
    );
};

export default Gamepreview;