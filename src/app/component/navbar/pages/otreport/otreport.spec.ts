import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otreport } from './otreport';

describe('Otreport', () => {
  let component: Otreport;
  let fixture: ComponentFixture<Otreport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Otreport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Otreport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
