import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { AuthenticationService } from './authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'POKEMAN';
  user;
  private isLoggedIn: Boolean;
  private userName: String;

    constructor(public authService: AuthenticationService, private router: Router) {
     this.authService.user.subscribe(user => {
       if (user == null) {
         this.isLoggedIn = false;
         this.router.navigate(['getPokeman']);
       } else {
         this.isLoggedIn = true;
         this.userName = user.displayName;
         this.router.navigate([]);
       }
     });
   }

login() {
  this.authService.login();
}

logout() {
  this.authService.logout();
}
}
