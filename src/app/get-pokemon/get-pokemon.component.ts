import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-get-pokemon',
  templateUrl: './get-pokemon.component.html',
  styleUrls: ['./get-pokemon.component.css'],
  providers:[PokemonService]
})
export class GetPokemonComponent implements OnInit {

  returnedData;

  apiURL:string = "http://pokeapi.co/api/v2/pokemon/1" //return bulbasaur

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getData(this.apiURL).subscribe(
      returnedJSON => {
          this.returnedData = returnedJSON;
        },
      returnedJSON => {
          console.log("ERROR: ",returnedJSON);
      },
      () => {
          console.log("Completed");
          this.showData();
      }
    );
  }

  showData() {
    let name = this.returnedData.name;
    console.log(name);
  }

}
