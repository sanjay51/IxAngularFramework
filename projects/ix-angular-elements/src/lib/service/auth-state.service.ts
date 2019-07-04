import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  public authState: AuthenticationState = new AuthenticationState();
  public entityMetadataMap = {};

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
    this.authState = new AuthenticationState();
    localStorage.clear();
  }

  public populateAuthState(user: any, authId: string) {
    let authState = new AuthenticationState();
    authState.authId = authId;
    authState.userId = user.userId;
    authState.name = user.name;
    authState.email = user.email;
    authState.accessLevel = user.accessLevel;
    authState.accountStatus = user.accountStatus;

    this.authState = authState;
    this.saveAuthStateInLocalStorage();
  }

  private saveAuthStateInLocalStorage() {
    localStorage.setItem("authState.authId", this.authState.authId);
    localStorage.setItem("authState.userId", this.authState.userId);
    localStorage.setItem("authState.name", this.authState.name);
    localStorage.setItem("authState.email", this.authState.email);
    localStorage.setItem("authState.accessLevel", this.authState.accessLevel);
    localStorage.setItem("authState.accountStatus", this.authState.accountStatus);
  }

  public tryLoadAuthStateFromLocalStorage(): boolean {
    let authId = localStorage.getItem("authState.authId")

    if (authId) {
      this.authState = new AuthenticationState();
      this.authState.authId = localStorage.getItem("authState.authId");
      this.authState.userId = localStorage.getItem("authState.userId");
      this.authState.name = localStorage.getItem("authState.name");
      this.authState.email = localStorage.getItem("authState.email");
      this.authState.accessLevel = localStorage.getItem("authState.accessLevel");
      this.authState.accountStatus = localStorage.getItem("authState.accountStatus");

      return true;
    }

    return false;
  }
}

export class AuthenticationState {
  authId: string;
  userId: string;
  name: string;
  email: string;
  accessLevel: string;
  accountStatus: string;

  isAdmin(): boolean {
    return this.accessLevel == "ADMIN";
  }

  isUserManager(): boolean {
    return this.accessLevel == "USER_MANAGER";
  }

  isUserManagerOrAdmin(): boolean {
    return this.isAdmin() || this.isUserManager();
  }
}