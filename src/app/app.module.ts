import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IxAngularElementsModule, IxFormComponent, NoteComponent } from 'ix-angular-elements';
import { createCustomElement } from '../../node_modules/@angular/elements';
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
    NoteComponent
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    const formElement = createCustomElement(IxFormComponent, {injector: injector});
    customElements.define('ix-form', formElement);

    const noteElement = createCustomElement(NoteComponent, {injector: injector});
    customElements.define('ix-note', noteElement);
  }
}
