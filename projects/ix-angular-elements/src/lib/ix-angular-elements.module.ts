import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { IxFormComponent } from './elements/ix-form/ix-form.component';
import { NoteComponent } from './elements/note/note.component';
import { IxAngularElementsComponent } from './ix-angular-elements.component';

@NgModule({
  declarations: [
    IxAngularElementsComponent,
    IxFormComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    IxFormComponent,
    NoteComponent
  ],
  entryComponents: [
    IxFormComponent,
    NoteComponent
  ]
})
export class IxAngularElementsModule {
  constructor(injector: Injector) {
  }
}
