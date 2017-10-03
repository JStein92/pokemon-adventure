import { Pokemon } from './pokemon.model';

export class Player {

  constructor(
    public name: string,
    public inactivePokemon: Pokemon[],
    public activePokemon: Pokemon[]
  ) {}
}
