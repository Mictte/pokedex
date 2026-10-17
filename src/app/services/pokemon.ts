import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Pokemon } from '../models/pokemon.model';

// datos recibidos por la api estructura
interface PokeApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string | null;
    other: {
      'official-artwork': {
        front_default: string | null;
      };
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'https://pokeapi.co/api/v2/pokemon';

  // al español
  private readonly typeNames: Record<string, string> = {
    normal: 'Normal',
    fire: 'Fuego',
    water: 'Agua',
    electric: 'Eléctrico',
    grass: 'Planta',
    ice: 'Hielo',
    fighting: 'Lucha',
    poison: 'Veneno',
    ground: 'Tierra',
    flying: 'Volador',
    psychic: 'Psíquico',
    bug: 'Bicho',
    rock: 'Roca',
    ghost: 'Fantasma',
    dragon: 'Dragón',
    dark: 'Siniestro',
    steel: 'Acero',
    fairy: 'Hada'
  };

  getPokemon(nameOrId: string | number): Observable<Pokemon> {

    const query = String(nameOrId).trim().toLowerCase();

    return this.http
      .get<PokeApiResponse>(`${this.apiUrl}/${encodeURIComponent(query)}`)
      .pipe(
        map(data => ({
          id: data.id,
          name: data.name.charAt(0).toUpperCase()
            + data.name.slice(1),

          types: data.types.map(
            item =>
              this.typeNames[item.type.name] ?? item.type.name
          ),

          height: data.height / 10,
          weight: data.weight / 10,

          imageUrl:
            data.sprites.other['official-artwork'].front_default
            ?? data.sprites.front_default
            ?? ''
        }))
      );
  }
}
