import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(offset: number = 0, limit: number = 9): Observable<Pokemon[]> {
    const url = `${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`;

    return this.http.get<any>(url)
      .pipe(
        map((response: any) => response.results),
        map((pokemons: any[]) => pokemons.map((pokemon: any) => this.getPokemonDetail(pokemon.url))),
        switchMap((detailRequests: Observable<Pokemon>[]) => forkJoin(detailRequests))
      );
  }

  getPokemonDetail(url: string): Observable<Pokemon> {
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        const types = response.types.map((typeInfo: any) => typeInfo.type.name);
        const heightInMeters = (response.height / 10).toFixed(1);
        const findStat = (statName: string): number => {
          const statEntry = response.stats.find(
            (s: any) => s.stat.name === statName || s.stat.name === statName.replace('_', '-')
          );
          return statEntry ? statEntry.base_stat : 0;
        };

      
        return {
          id: response.id,
          name: response.name,
          height: `${heightInMeters}m`,
          weight: response.weight + 'kg',
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${response.id}.svg`,
          types: types,
          stats: {
            hp: findStat("hp"),
            attack: findStat("attack"),
            defense: findStat("defense"),
            special_attack: findStat("special-attack"),
            special_defense: findStat("special-defense"),
            speed: findStat("speed")
          }
        };
      })
    );
  }
}
