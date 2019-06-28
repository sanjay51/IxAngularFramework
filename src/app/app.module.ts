import { Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IxAngularElementsModule, IxFormComponent, IxNoteComponent } from 'ix-angular-elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxAngularElementsModule
  ],
  providers: [],
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
