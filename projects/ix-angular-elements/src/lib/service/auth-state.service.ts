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

  public navigateWithParams(to: string, queryParams: any) {
    this.router.navigate(['/' + to], {queryParams: queryParams});
  }

  public logout() {
    this.resetAuthState(null);
  }

  public resetAuthState(authState: any) {
    this.authState = authState;
    localStorage.setItem(AUTH_STATE, JSON.stringify(this.authState));
  }

  public getAuthStateAttribute(attribute: string): string {
    if (! this.authState) return null;
    return this.authState[attribute]
  }

  public tryLoadAuthStateFromLocalStorage(): boolean {
    let authState = JSON.parse(localStorage.getItem(AUTH_STATE));

    console.log(authState);
    
    if (authState) {
      this.authState = authState;
      return true;
    }


    return false;
  }
}