import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrerComponent } from './form-registrer.component';

describe('FormRegistrerComponent', () => {
  let component: FormRegistrerComponent;
  let fixture: ComponentFixture<FormRegistrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
