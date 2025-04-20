export interface Website {
    game: number;
    url: string;
    website_type: number;

}

export interface WebsiteType {
    id: number;
    name: string;
    url?: string;
}

export enum WebsiteTypeEnum {
    Official = 1,
    Wikia = 2,
    Wikipedia = 3,
    Facebook = 4,
    Twitter = 5,
    Twitch = 6,
    Instagram = 8,
    YouTube = 9,
    iphone = 10,
    ipad = 11,
    android = 12,
    steam =	13,
    reddit = 14,
    itch = 15,
    epicgames =	16,
    gog	 = 17,
    discord = 18,
    bluesky = 19
}