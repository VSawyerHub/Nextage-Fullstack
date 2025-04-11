import { Game } from './game';

export interface Company {
    description?: string;
    id: number;
    name: string;
    slug: string;
    developed?: Game[]
    logo?: { id: number; url: string };
}

