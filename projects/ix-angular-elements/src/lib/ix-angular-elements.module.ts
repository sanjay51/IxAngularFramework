import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { IxAngularElementsComponent } from './ix-angular-elements.component';
import { IxFormComponent } from './ix-form/ix-form.component';

@NgModule({
  declarations: [
    IxAngularElementsComponent,
    IxFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    IxAngularElementsComponent,
    IxFormComponent
  ],
  entryComponents: [
    IxFormComponent
  ]
})
export class IxAngularElementsModule {
  constructor(injector: Injector) {
    const postHeadingElement = createCustomElement(IxFormComponent, {injector: injector});
    customElements.define('ix-form', postHeadingElement);
  }
}
