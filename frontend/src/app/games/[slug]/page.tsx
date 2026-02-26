import { gamesService } from "@/services/IGDB/game";
import GameDetailClient from "./gameclient";

export default async function GameDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Extract slug directly from params as per Next.js App Router convention
  const { slug } = params;

  if (!slug) {
    return (
      <div className="flex justify-center items-center h-96 text-lg text-gray-400">
        Game not found.
      </div>
    );
  }

  const game = await gamesService.getGameBySlug(slug);

  if (!game) {
    return (
      <div className="flex justify-center items-center h-96 text-lg text-gray-400">
        Game not found.
      </div>
    );
  }

  return <GameDetailClient game={game} />;
}