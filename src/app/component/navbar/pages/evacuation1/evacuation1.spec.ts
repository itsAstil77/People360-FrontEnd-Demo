import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evacuation1 } from './evacuation1';

describe('Evacuation1', () => {
  let component: Evacuation1;
  let fixture: ComponentFixture<Evacuation1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Evacuation1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evacuation1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
