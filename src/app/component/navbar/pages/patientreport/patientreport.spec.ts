import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patientreport } from './patientreport';

describe('Patientreport', () => {
  let component: Patientreport;
  let fixture: ComponentFixture<Patientreport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patientreport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patientreport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
