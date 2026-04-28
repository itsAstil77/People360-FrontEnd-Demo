import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardnew } from './dashboardnew';

describe('Dashboardnew', () => {
  let component: Dashboardnew;
  let fixture: ComponentFixture<Dashboardnew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardnew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboardnew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
