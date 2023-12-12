import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAndGetChambreComponent } from './ajout-and-get-chambre.component';

describe('AjoutAndGetChambreComponent', () => {
  let component: AjoutAndGetChambreComponent;
  let fixture: ComponentFixture<AjoutAndGetChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutAndGetChambreComponent]
    });
    fixture = TestBed.createComponent(AjoutAndGetChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
