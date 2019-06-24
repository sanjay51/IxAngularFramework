import { CommonModule } from '@angular/common';
import { Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IxCodeComponent } from './elements/ix-code/ix-code.component';
import { IxFormComponent } from './elements/ix-form/ix-form.component';
import { IxNoteComponent } from './elements/ix-note/ix-note.component';
import { IxAngularElementsComponent } from './ix-angular-elements.component';

@NgModule({
  declarations: [
    IxAngularElementsComponent,
    IxFormComponent,
    IxNoteComponent,
    IxCodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    IxFormComponent,
    IxNoteComponent,
    IxCodeComponent
  ],
  entryComponents: [
    IxFormComponent,
    IxNoteComponent,
    IxCodeComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
],
})
export class IxAngularElementsModule {
  constructor(injector: Injector) {
  }
}
