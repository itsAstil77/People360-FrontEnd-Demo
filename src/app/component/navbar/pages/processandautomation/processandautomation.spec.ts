import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Processandautomation } from './processandautomation';

describe('Processandautomation', () => {
  let component: Processandautomation;
  let fixture: ComponentFixture<Processandautomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Processandautomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Processandautomation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
