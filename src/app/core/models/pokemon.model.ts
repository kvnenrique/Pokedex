export interface Pokemon {
    id: number;
    name: string;
    height: string;
    weight: string;
    imageUrl: string;
    types: string[];
    stats: {
        hp: number,
        attack: number,
        defense: number,
        special_attack: number,
        special_defense: number,
        speed: number
    }
}