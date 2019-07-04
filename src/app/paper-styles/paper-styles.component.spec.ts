import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperStylesComponent } from './paper-styles.component';

describe('PaperStylesComponent', () => {
  let component: PaperStylesComponent;
  let fixture: ComponentFixture<PaperStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
