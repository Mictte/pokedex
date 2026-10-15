
import { Component, computed, signal } from '@angular/core';

import { SearchBar } from './components/search-bar/search-bar';
import { PokemonCard } from './components/pokemon-card/pokemon-card';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  imports: [SearchBar, PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PokeDex');

  // Datos temporales para el primer avance HardCore
  protected readonly pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      types: ['Planta', 'Veneno'],
      height: 0.7,
      weight: 6.9,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
      id: 2,
      name: 'Ivysaur',
      types: ['Planta', 'Veneno'],
      height: 1,
      weight: 13,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
    },
    {
      id: 3,
      name: 'Venusaur',
      types: ['Planta', 'Veneno'],
      height: 2,
      weight: 100,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
    }
  ];

  protected readonly currentIndex = signal(0);
  protected readonly errorMessage = signal('');

  protected readonly selectedPokemon = computed(
    () => this.pokemons[this.currentIndex()]
  );

  // Buscar por nombre o numero
  onPokemonSearch(value: string): void {
    const query = value.trim().toLowerCase();

    const index = this.pokemons.findIndex(
      pokemon =>
        pokemon.name.toLowerCase() === query ||
        pokemon.id === Number(query)
    );

    if (index === -1) {
      this.errorMessage.set(
        'Pokémon no disponible en este prototipo.'
      );
      return;
    }

    this.currentIndex.set(index);
    this.errorMessage.set('');
  }


  previousPokemon(): void {
    this.currentIndex.update(index =>
      (index - 1 + this.pokemons.length) % this.pokemons.length
    );
    this.errorMessage.set('');
  }


  nextPokemon(): void {
    this.currentIndex.update(index =>
      (index + 1) % this.pokemons.length
    );
    this.errorMessage.set('');
  }
}
