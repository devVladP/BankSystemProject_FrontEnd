import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: '<button (click)="logout()">Log out</button>',
  styles: [],
})
export class LogoutComponent {
  constructor(@Inject(DOCUMENT) private doc: Document, public auth: AuthService) {}

  logout(): void {
    this.auth.logout({ 
      logoutParams: { 
        returnTo: this.doc.location.origin 
      }
    });
  }
}
