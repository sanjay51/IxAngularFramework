import { CommonModule } from '@angular/common';
import { Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IxCodeComponent } from './elements/ix-code/ix-code.component';
import { IxFormComponent } from './elements/ix-form/ix-form.component';
import { IxIconBoxComponent } from './elements/ix-icon-box/ix-icon-box.component';
import { IxNoteComponent } from './elements/ix-note/ix-note.component';
import { IxPostHeadingComponent } from './elements/ix-post-heading/ix-post-heading.component';
import { IxQAComponent } from './elements/ix-qa/ix-qa.component';
import { IxAngularElementsComponent } from './ix-angular-elements.component';

@NgModule({
  declarations: [
    IxAngularElementsComponent,
    IxFormComponent,
    IxNoteComponent,
    IxCodeComponent,
    IxPostHeadingComponent,
    IxQAComponent,
    IxIconBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ],
  entryComponents: [
    IxFormComponent,
    IxNoteComponent,
    IxCodeComponent,
    IxPostHeadingComponent,
    IxQAComponent,
    IxIconBoxComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class IxAngularElementsModule {
  constructor(injector: Injector) {
    let components: Array<[string, any]> = [
      ['ix-code', IxCodeComponent],
      ['ix-form', IxFormComponent],
      ['ix-note', IxNoteComponent],
      ['ix-post-heading', IxPostHeadingComponent],
      ['ix-qa', IxQAComponent],
      ['ix-icon-box', IxIconBoxComponent]
    ]

    components.forEach(c => {
      const element = createCustomElement(c[1], {injector: injector});
      customElements.define(c[0], element);
    });
  }
}
