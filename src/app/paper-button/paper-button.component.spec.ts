import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperButtonComponent } from './paper-button.component';

describe('PaperButtonComponent', () => {
  let component: PaperButtonComponent;
  let fixture: ComponentFixture<PaperButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
