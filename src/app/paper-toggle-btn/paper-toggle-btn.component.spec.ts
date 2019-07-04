import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperToggleBtnComponent } from './paper-toggle-btn.component';

describe('PaperToggleBtnComponent', () => {
  let component: PaperToggleBtnComponent;
  let fixture: ComponentFixture<PaperToggleBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperToggleBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperToggleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
