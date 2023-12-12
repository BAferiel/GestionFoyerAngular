import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreservationComponent } from './addreservation.component';

describe('AddreservationComponent', () => {
  let component: AddreservationComponent;
  let fixture: ComponentFixture<AddreservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreservationComponent]
    });
    fixture = TestBed.createComponent(AddreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
