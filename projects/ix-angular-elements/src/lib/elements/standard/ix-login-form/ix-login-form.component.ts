import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthStateService } from '../../../service/auth-state.service';
import { AuthenticationService } from '../../../service/authentication.service';
import { InitializerService } from '../../../service/initializer.service';

@Component({
  selector: 'ix-login-form',
  templateUrl: './ix-login-form.component.html',
  styleUrls: ['./ix-login-form.component.scss']
})
export class IxLoginFormComponent implements OnInit {
  @Input() successPath: string;
  @Input() cancelPath: string;
  
  constructor(
    public authentication: AuthenticationService,
    private state: AuthStateService,
    private initializer: InitializerService
  ) { }

  ngOnInit() {
    this.state.logout();
  }

  form = {
    fields: [
      {
        name: "email",
        label: "Email",
        validators: [Validators.required, Validators.email],
        defaultValue: '',
      },
      {
        name: "password",
        label: "Password",
        validators: [Validators.required, Validators.minLength(6)],
        defaultValue: '',
        isPassword: true
      }
    ],

    title: "Login",

    submitButtonLabel: "Login",

    onSubmit: (fields): Promise<any> => {
      return this.authentication.login(fields.email.value, fields.password.value)
    },

    postSubmit: (response) => {
      this.initializer.initializeAfterLogin(response.user, response.authId);
      this.state.navigateTo(this.successPath);
    },

    parseError: (error) : string => {
      return "Invalid username or password.";
    },

    onCancel: () => {
      this.state.navigateTo(this.cancelPath);
    }
  }
}
