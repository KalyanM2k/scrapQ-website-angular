import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carouselComponent } from './carousel.component';

describe('carouselComponent', () => {
  let component: carouselComponent;
  let fixture: ComponentFixture<carouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [carouselComponent]
    });
    fixture = TestBed.createComponent(carouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
