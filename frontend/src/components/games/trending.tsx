import React, { useEffect, useState } from 'react';
import { Game } from '@/interfaces/game';
import { gamesService } from '@/services/IGDB/game';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

// Create animation with dynamic speed
const createSlideAnimation = (duration: number) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
`;

// Make animation speed responsive
const SliderTrack = styled.div<{ duration: number }>`
  display: flex;
  width: fit-content;
  animation: ${props => createSlideAnimation(props.duration)} ${props => props.duration}s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const GameItem = styled.div`
  width: 180px;
  margin: 0 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const GameTitle = styled.div`
  padding: 10px;
  font-weight: 600;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const LoadingSkeleton = styled.div`
  display: flex;
  gap: 15px;
  padding: 20px 0;
`;

const SkeletonItem = styled.div`
  width: 180px;
  height: 280px;
  background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;

  @keyframes loading {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;

const Trending: React.FC<{ types: number[]; limit?: number }> = ({ types, limit = 20 }) => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // Make animation slower on larger screens for better readability
    const [animationDuration, setAnimationDuration] = useState(30);

    useEffect(() => {
        const handleResize = () => {
            // Adjust speed based on screen width
            const width = window.innerWidth;
            setAnimationDuration(width > 1200 ? 40 : width > 768 ? 30 : 20);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const loadGames = async () => {
            const data = await gamesService.getTrending(types, limit);
            if (Array.isArray(data)) setGames(data);
            else if (data && 'error' in data) setError(data.error);
            setLoading(false);
        };
        loadGames();
    }, [types, limit]);

    if (loading) {
        return (
            <LoadingSkeleton>
                {[...Array(5)].map((_, i) => (
                    <SkeletonItem key={i} />
                ))}
            </LoadingSkeleton>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center py-10">{error}</div>;
    }

    // Duplicate games array to create continuous sliding effect
    const duplicatedGames = [...games, ...games];

    return (
        <SliderContainer>
            <SliderTrack duration={animationDuration}>
                {duplicatedGames.map((game, index) => (
                    <Link key={`${game.id}-${index}`} href={`/games/${game.slug}`}>
                        <GameItem>
                            <GameImage
                                src={game.cover?.url?.replace('t_thumb', 't_cover_big') || '/placeholder.jpg'}
                                alt={game.name}
                            />
                            <GameTitle>{game.name}</GameTitle>
                        </GameItem>
                    </Link>
                ))}
            </SliderTrack>
        </SliderContainer>
    );
};

export default Trending;