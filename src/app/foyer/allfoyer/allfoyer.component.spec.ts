import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfoyerComponent } from './allfoyer.component';

describe('AllfoyerComponent', () => {
  let component: AllfoyerComponent;
  let fixture: ComponentFixture<AllfoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllfoyerComponent]
    });
    fixture = TestBed.createComponent(AllfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
