import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclablesComponent } from './recyclables.component';

describe('RecyclablesComponent', () => {
  let component: RecyclablesComponent;
  let fixture: ComponentFixture<RecyclablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecyclablesComponent]
    });
    fixture = TestBed.createComponent(RecyclablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
