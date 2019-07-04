import { Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import { LoginAPI } from '../api/standard/login.api';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLoggingIn: boolean = false;
  public isSigningUp: boolean = false;

  constructor(private apiService: APIService, private state: AuthStateService) {
    this.state.tryLoadAuthStateFromLocalStorage();
   }

  public login(email: string, password: string): Promise<any> {
    this.isLoggingIn = true;

    let api: LoginAPI = new LoginAPI(email, password);
    return this.apiService.call(api).toPromise();
  }

  /*
  public signup(signupState: SignupState): Promise<any> {
    this.isSigningUp = true;
    let api: CreateUserAPI = new CreateUserAPI(signupState);

    return this.apiInvoker.call(api).toPromise()
  }*/

  public isLoggedIn() {
    return (this.state.authState.authId != null);
  }
}