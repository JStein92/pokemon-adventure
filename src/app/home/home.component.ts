import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService]

})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private authService: AuthenticationService, private router: Router) { }
  amountOfPokemon;

  ngOnInit() { //get amountOfPokemon to check if user needs to go through tutorial

        this.pokemonService.getAllPokemon().subscribe(allPokemonFromFirebase => {
      this.amountOfPokemon = (allPokemonFromFirebase.length);
        });

    this.pokemonService.playSong("./assets/music/opening.mp3");

  }
  deleteAllPokemon(){
      var r = confirm("Are you sure you want to clear the database of Pokemon?")
      if (r){
          this.pokemonService.deleteAllPokemon();
          alert('Pokemon cleared')
      } else {

      }

  }
  goToGame(){
    this.pokemonService.stopSong();

    if (this.amountOfPokemon === 0){
      this.router.navigate(['tutorial'])
    } else {
        this.router.navigate(['map']);
    }

  }

  googleLogout() {
    this.authService.logout();
     this.router.navigate(['']);
     this.pokemonService.stopSong();
  }
}
