import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperCheckboxComponent } from './paper-checkbox.component';

describe('PaperCheckboxComponent', () => {
  let component: PaperCheckboxComponent;
  let fixture: ComponentFixture<PaperCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
