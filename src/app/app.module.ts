import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IxAngularElementsModule, IxFormComponent, NoteComponent } from 'ix-angular-elements';
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
  }
}
