import { Injectable } from '@angular/core';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {

  constructor(private authState: AuthStateService
  ) { }

  public initialize() {
    let isSignedIn = this.authState.tryLoadAuthStateFromLocalStorage();

    if (isSignedIn) {
      console.log("Logged in!")
    }
  }

  public initializeAfterLogin(user: any, authId: string) {
    this.authState.populateAuthState(user, authId)
  }
}
