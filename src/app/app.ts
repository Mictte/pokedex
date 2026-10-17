import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { SearchBar } from './components/search-bar/search-bar';
import { PokemonCard } from './components/pokemon-card/pokemon-card';
import { Pokemon } from './models/pokemon.model';
import { PokemonService } from './services/pokemon';

@Component({
  selector: 'app-root',
  imports: [SearchBar, PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PokeDex');

  private readonly pokemonService = inject(PokemonService);

  protected readonly selectedPokemon = signal<Pokemon | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal('');

  constructor() {
    this.loadPokemon(1);
  }

  // Consultar un Pokemon desde PokeAPI
  private loadPokemon(nameOrId: string | number): void {
    this.isLoading.set(true);
    this.errorMessage.set('');
    this.selectedPokemon.set(null);

    this.pokemonService.getPokemon(nameOrId).subscribe({
      next: (pokemon) => {
        this.selectedPokemon.set(pokemon);
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.selectedPokemon.set(null);

        if (error.status === 404) {
          this.errorMessage.set(
            'No se encontró el Pokémon. Verifica el nombre o número.'
          );
        } else {
          this.errorMessage.set(
            'No se pudo consultar PokéAPI. Revisa tu conexión.'
          );
        }

        this.isLoading.set(false);
      }
    });
  }

  // Buscar por nombre o nmero
  onPokemonSearch(value: string): void {
    this.loadPokemon(value);
  }

  // Pokemon anterior
  previousPokemon(): void {
    const pokemon = this.selectedPokemon();

    if (pokemon && pokemon.id > 1 && !this.isLoading()) {
      this.loadPokemon(pokemon.id - 1);
    }
  }

  // Pokemon siguiente
  nextPokemon(): void {
    const pokemon = this.selectedPokemon();

    if (pokemon && !this.isLoading()) {
      this.loadPokemon(pokemon.id + 1);
    }
  }
}
