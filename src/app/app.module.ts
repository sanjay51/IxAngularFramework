import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxAngularElementsModule, IxFormComponent, IxNoteComponent, URL_TOKEN } from 'ix-angular-elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxAngularElementsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule, MatSelectModule, MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: URL_TOKEN, useValue: 'http://www.mocky.io/v2/5d1e1eb430000058b6d72518'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    IxFormComponent,
    IxNoteComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule {
  constructor(injector: Injector) {
  }
}
