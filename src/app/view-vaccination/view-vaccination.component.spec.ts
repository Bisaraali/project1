import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVaccinationComponent } from './view-vaccination.component';

describe('ViewVaccinationComponent', () => {
  let component: ViewVaccinationComponent;
  let fixture: ComponentFixture<ViewVaccinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVaccinationComponent]
    });
    fixture = TestBed.createComponent(ViewVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
