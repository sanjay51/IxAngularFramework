import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_STATE: string = "AUTH_STATE";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  public authState: any;

  constructor(private router: Router) { }

  public navigate(to: string, id: string) {
    let link = ['/' + to]

    if (id) {
      link = ['/' + to, id]
    }
    
    this.router.navigate(link)
  }

  public navigateTo(to: string) {
    this.navigate(to, null);
  }

  public navidateWithParams(to: string, queryParams: any) {
    this.router.navigate(['/' + to], {queryParams: queryParams});
  }

  public logout() {
    this.resetAuthState(null);
    localStorage.clear();
  }

  public resetAuthState(authState: any) {
    this.authState = authState;
    localStorage.setItem(AUTH_STATE, this.authState);
  }

  public tryLoadAuthStateFromLocalStorage(): boolean {
    let authState = localStorage.getItem(AUTH_STATE)

    if (authState) {
      this.authState = authState;
      return true;
    }

    return false;
  }
}