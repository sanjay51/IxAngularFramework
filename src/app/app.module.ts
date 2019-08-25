import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxAngularElementsModule, IxFormComponent, IxNoteComponent, URL_TOKEN } from 'ix-angular-elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxAngularElementsModule,
    BrowserAnimationsModule,
    HttpClientModule
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
