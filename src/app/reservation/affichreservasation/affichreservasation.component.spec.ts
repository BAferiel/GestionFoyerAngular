import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichreservasationComponent } from './affichreservasation.component';

describe('AffichreservasationComponent', () => {
  let component: AffichreservasationComponent;
  let fixture: ComponentFixture<AffichreservasationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffichreservasationComponent]
    });
    fixture = TestBed.createComponent(AffichreservasationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
