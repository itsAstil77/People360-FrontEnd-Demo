import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createprocessandautomation } from './createprocessandautomation';

describe('Createprocessandautomation', () => {
  let component: Createprocessandautomation;
  let fixture: ComponentFixture<Createprocessandautomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createprocessandautomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createprocessandautomation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
