import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService]

})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService,private router: Router) { }
amountOfPokemon;
  ngOnInit() {

    this.pokemonService.playSong("../assets/music/pallete-town.mp3");

  }
  deleteAllPokemon(){
    this.pokemonService.deleteAllPokemon();
  }
  goToGame(){
    this.pokemonService.stopSong();

    this.pokemonService.getAllPokemon().subscribe(allPokemonFromFirebase => {
      this.amountOfPokemon = (allPokemonFromFirebase.length);


    })
    if (this.amountOfPokemon === 0){
      this.router.navigate(['tutorial'])
    } else {
        this.router.navigate(['map']);
    }


  }


}
