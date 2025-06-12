import { Company } from "./company";
import { Website } from "./website";

export interface Game {
    first_release_date?: number;
    id: number;
    name: string;
    slug: string;
    cover?: { id: number; url: string; };
    age_ratings?: AgeRating[];
    screenshots?: Array<{ id: number; url: string }>;
    summary?: string;
    rating?: number;
    genres?: Array<{ slug: string; name: string }>;
    game_type?: string;
    game_modes?: Array<{ name: string; slug: string }>;
    language_supports?: Array<{ id: number; name: string }>;
    platforms?: Array<{ id: number; name: string; platform_logo?: { id: number; url: string } }>;
    player_perspectives?: Array<{ id: number; name: string }>;
    series?: Array<{ id: number; name: string }>;
    franchises?: Array<{ id: number; name: string }>;
    themes?: Array<{ id: number; name: string }>;
    involved_companies?:{ company: Company; }[];
    websites?: Website[];
}

interface ReleaseDate {
    id: number;
    date: number;
    date_format: DateFormat;
    release_region: ReleaseRegion;
    game: number;
    platform: number;
}
enum DateFormat{
    YYYYMMDD = 0,
    YYYYMMMMDD = 1,
    YYYYMMDDHHMM = 2,
    YYYYMMDDHHMMSS = 3,
    TBD = 4
}
enum ReleaseRegion{
    Europe = 1,
    NorthAmerica = 2,
    Australia = 3,
    NewZealand = 4,
    Japan = 5,
    China = 6,
    Asia = 7,
    Worldwide = 8,
    Korea = 9,
    Brazil = 10
}

interface AgeRating {
    id: number;
    organization: number;
    rating_category: number;
    synopsis?: string;
    rating_cover_url?: string;
}

enum AgeRatingCategory{
    ESRB = 1,
    PEGI = 2,
    CERO = 3,
    USK = 4,
    GRAC = 5,
    CLASS_IND = 6,
    ACB = 7
}


