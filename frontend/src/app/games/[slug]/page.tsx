import { gamesService } from "@/services/IGDB/game";
import GameDetailClient from "./gameclient";

export default async function GameDetailPage({ params }: { params?: Promise<{ slug: string }> }) {
    const resolvedParams = params ? await params : undefined;
    const slug = resolvedParams?.slug;

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