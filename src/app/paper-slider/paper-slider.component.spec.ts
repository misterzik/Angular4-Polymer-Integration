import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperSliderComponent } from './paper-slider.component';

describe('PaperSliderComponent', () => {
  let component: PaperSliderComponent;
  let fixture: ComponentFixture<PaperSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
