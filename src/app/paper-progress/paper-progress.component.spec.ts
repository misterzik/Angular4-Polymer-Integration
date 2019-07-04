import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperProgressComponent } from './paper-progress.component';

describe('PaperProgressComponent', () => {
  let component: PaperProgressComponent;
  let fixture: ComponentFixture<PaperProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
