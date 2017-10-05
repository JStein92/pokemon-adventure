import { Component, OnInit  } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { AuthenticationService } from '../authentication.service';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

import { Router } from '@angular/router';
import * as firebase from "firebase";

import { Player } from '../player.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, PokemonService]
})


export class LoginComponent implements OnInit {

  user;
  isLoggedIn;
  constructor(public authService: AuthenticationService, private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {

  }

  ngDoCheck() {
   this.user = firebase.auth().currentUser;
   }

  googleLogin() {
    this.authService.login();
     this.isLoggedIn = true;
     setTimeout(()=> {
       this.router.navigate(['home']);
     }, 2000);
  }

  googleLogout() {
    this.authService.logout();
  }

  signUp(email, password){

     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorMessage = error.message;
      if(!errorMessage) {
        this.router.navigate(['home']);
      } else {
        alert(error.message);
        //this.isLoggedIn = true;
      }
    });
  }
  signIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorMessage = error.message;
      if(errorMessage) {
      alert(error.message);
      } else {
        this.router.navigate(['home']);
        alert("you have successfully signed in");
      }
    });
  }

  anonymousLogin(){
    this.router.navigate(['home']);
    firebase.auth().signInAnonymously().catch(function(error) {


      var errorMessage = error.message;
      if(errorMessage) {
      alert(error.message);
      } else {
        this.router.navigate(['home']);
        alert("you have successfully signed in");
      }
    });
  }

  // startCreatingPlayer(name:string) {
  //    //this.notPlayedBefore = false;
  //   // let newPlayer = new Player(this.userUid, name);
  //   // this.pokemonService.createPlayer(newPlayer);
  // }
}
