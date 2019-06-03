import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IxAngularElementsComponent } from './ix-angular-elements.component';

describe('IxAngularElementsComponent', () => {
  let component: IxAngularElementsComponent;
  let fixture: ComponentFixture<IxAngularElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IxAngularElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IxAngularElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
