import { WebsiteTypeEnum } from '@/interfaces/website';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { Game } from '@/interfaces/game';
import { gamesService } from "@/services/IGDB/game";

interface GameDetailProps {
  game: Game | null;
  error?: string;
}

const GameDetail: NextPage<GameDetailProps> = ({ game, error }) => {
    const router = useRouter();
  
    // Handle loading state
    if (router.isFallback) {
      return <div className="flex justify-center items-center h-96 text-lg text-gray-400">Loading game details...</div>;
    }
  
    // Handle error state
    if (error || !game) {
      return (
        <div className="max-w-xl mx-auto my-20 text-center p-10 bg-game-gray rounded-lg">
          <h1 className="text-2xl text-red-500 mb-4">Error</h1>
          <p className="text-gray-300 mb-6">{error || 'Failed to load game details'}</p>
          <button 
            className="bg-game-blue hover:bg-blue-600 text-white font-medium px-6 py-2 rounded transition-colors"
            onClick={() => router.push('/')}
          >
            Back to Home
          </button>
        </div>
      );
    }
  
    // Format IGDB image URL
    const formatImageUrl = (url?: string, size: string = 't_cover_big') => {
      if (!url) return '/placeholder-game.jpg';
      return url.replace('//images.igdb.com', 'https://images.igdb.com')
                .replace('t_thumb', size);
    };
  
    // Format release date
    const formatReleaseDate = (timestamp?: number) => {
      if (!timestamp) return 'TBA';
      return new Date(timestamp * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };
  
    return (
      <>
        <Head>
          <title>{game.name} | Game Database</title>
          <meta name="description" content={game.summary || `${game.name} - Game details`} />
        </Head>
  
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
                  layout="responsive"
                  className="w-full h-auto"
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

                {game.age_ratings && game.age_ratings.length > 0 && (
                    <div className="mb-4">
                        <span className="block font-semibold mb-1 text-gray-400">Age Ratings:</span>
                        <div className="flex flex-wrap gap-2">
                            {game.age_ratings.map((rating, index) => (
                                <div key={index} className="bg-game-light px-3 py-1 rounded text-sm">
                                    {rating.rating_cover_url ? (
                                        <Image
                                            src={rating.rating_cover_url}
                                            width={40}
                                            height={40}
                                            alt="Age Rating"
                                        />
                                    ) : (
                                        `Rating: ${rating.rating_category}`
                                    )}
                                </div>
                            ))}
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

            {game.platforms && game.platforms.length > 0 && (
              <div className="mb-4">
                <span className="block font-semibold mb-1 text-gray-400">Platforms:</span>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform, index) => (
                    <span key={index} className="bg-game-light px-3 py-1 rounded text-sm">
                      {platform.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
                {game.game_modes && game.game_modes.length > 0 && (
                    <div className="mb-4">
                        <span className="block font-semibold mb-1 text-gray-400">Game Modes:</span>
                        <div className="flex flex-wrap gap-2">
                            {game.game_modes.map((mode, index) => (
                                <span key={index} className="bg-game-light px-3 py-1 rounded text-sm">
                            {mode.name}
                              </span>
                            ))}
                        </div>
                    </div>
                )}

                {game.themes && game.themes.length > 0 && (
                    <div className="mb-4">
                        <span className="block font-semibold mb-1 text-gray-400">Themes:</span>
                        <div className="flex flex-wrap gap-2">
                            {game.themes.map((theme, index) => (
                                <span key={index} className="bg-game-light px-3 py-1 rounded text-sm">
                            {theme.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {game.involved_companies && game.involved_companies.length > 0 && (
                    <div className="mb-4">
                        <span className="block font-semibold mb-1 text-gray-400">Publishers/Developers:</span>
                        <div className="flex flex-wrap gap-2">
                            {game.involved_companies.map((company, index) => (
                                <div key={index} className="bg-game-light px-3 py-1 rounded text-sm">
                                    {company.company.name}
                                </div>
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

        {game.screenshots && game.screenshots.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-5 text-white">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {game.screenshots.slice(0, 6).map((screenshot, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src={formatImageUrl(screenshot.url, 't_screenshot_big')} 
                    alt={`${game.name} screenshot ${index + 1}`}
                    width={460} 
                    height={215} 
                    layout="responsive"
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

            {game.websites && game.websites.length > 0 && (
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-5 text-white">Links</h3>
                    <div className="flex flex-wrap gap-3">
                        {game.websites.map((site, index) => {
                            const websiteType = Object.entries(WebsiteTypeEnum)
                                .find(([_, value]) => value === site.website_type)?.[0] || 'Link';

                            return (
                                <a
                                    key={index}
                                    href={site.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-game-light hover:bg-game-blue transition-colors px-4 py-2 rounded"
                                >
                                    {websiteType === 'Official' && <span className="mr-2">🏠</span>}
                                    {websiteType === 'Steam' && <span className="mr-2">🎮</span>}
                                    {websiteType === 'YouTube' && <span className="mr-2">📺</span>}
                                    {websiteType}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
    </div>
  </>
 );
};

export const getServerSideProps: GetServerSideProps<GameDetailProps> = async (context) => {
    const { slug } = context.params as { slug: string };

    try {
        const game = await gamesService.getGameBySlug(slug);

        if (!game) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                game,
            },
        };
    } catch (error) {
        console.error('Error fetching game details:', error);

        return {
            props: {
                game: null,
                error: error instanceof Error ? error.message : 'Failed to load game details',
            },
        };
    }
};

export default GameDetail;
                    