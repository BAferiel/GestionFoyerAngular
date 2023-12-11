import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheBlocComponent } from './affiche-bloc.component';

describe('AfficheBlocComponent', () => {
  let component: AfficheBlocComponent;
  let fixture: ComponentFixture<AfficheBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
