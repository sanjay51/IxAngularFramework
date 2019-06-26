import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IxAngularApiComponent } from './ix-angular-api.component';

describe('IxAngularApiComponent', () => {
  let component: IxAngularApiComponent;
  let fixture: ComponentFixture<IxAngularApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IxAngularApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IxAngularApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
