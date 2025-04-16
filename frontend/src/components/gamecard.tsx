import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/interfaces/game';
import { Card } from 'pixel-retroui';
import styled from 'styled-components';

// Styled components for the game card
const StyledCard = styled(Card)`
  height: 100%;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 133%; /* Aspect ratio for game covers */
`;

const GameImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NoImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  color: #505050;
  font-size: 14px;
`;

const GameTitle = styled.h3`
  padding: 12px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #505050;
`;

const ReleaseDate = styled.p`
  padding: 0 12px;
  margin-bottom: 4px;
  font-size: 14px;
  color: #505050;
`;

const GenreContainer = styled.div`
  padding: 0 12px 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const GenreTag = styled.span`
  font-size: 12px;
  background-color: #1a1a1a;
  color: #505050;
  padding: 4px 8px;
  border-radius: 4px;
`;

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
        <Link href={`/games/${game.slug}`} passHref>
            <StyledCard   bg="black"
                          textColor="white"
                          borderColor="black"
                          shadowColor="black">
                <ImageContainer>
                    {game.cover?.url ? (
                        <GameImage
                            src={formatImageUrl(game.cover.url)}
                            alt={game.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <NoImage>No image available</NoImage>
                    )}
                </ImageContainer>

                <GameTitle>{game.name}</GameTitle>

                {game.first_release_date && (
                    <ReleaseDate>{formatReleaseDate(game.first_release_date)}</ReleaseDate>
                )}

                {game.genres && game.genres.length > 0 && (
                    <GenreContainer>
                        {game.genres.slice(0, 3).map((genre, index) => (
                            <GenreTag key={index}>{genre.name}</GenreTag>
                        ))}
                    </GenreContainer>
                )}
            </StyledCard>
        </Link>
    );
};

export default GameCard;