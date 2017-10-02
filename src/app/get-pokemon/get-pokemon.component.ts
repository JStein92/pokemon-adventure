import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-get-pokemon',
  templateUrl: './get-pokemon.component.html',
  styleUrls: ['./get-pokemon.component.css'],
  providers:[PokemonService]
})
export class GetPokemonComponent implements OnInit {

  returnedData;
  habitats = null;
  allPokemon = [];
  apiURL:string = "http://pokeapi.co/api/v2/";

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getHabitats().subscribe(habitat=>{
      this.habitats = (habitat);
      console.log(this.habitats)
    })

  }

  searchHabitat(habitatToSearch){
    let randomPokemon = Math.floor(Math.random()*habitatToSearch.pokemon_species.length);
    console.log(habitatToSearch.pokemon_species[randomPokemon].name)
    this.apiURL = habitatToSearch.pokemon_species[randomPokemon].url;
    this.apiCall()
  }

  apiCall(){
    this.pokemonService.getData(this.apiURL).subscribe(
      returnedJSON => {
          this.returnedData = returnedJSON;
        },
      returnedJSON => {
          console.log("ERROR: ",returnedJSON);
      },
      () => {
          console.log(this.returnedData);
      }
    );
  }

  showName() {
    let name = this.returnedData.name;
    console.log(name);
  }

}
