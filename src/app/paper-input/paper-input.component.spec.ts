import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperInputComponent } from './paper-input.component';

describe('PaperInputComponent', () => {
  let component: PaperInputComponent;
  let fixture: ComponentFixture<PaperInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
