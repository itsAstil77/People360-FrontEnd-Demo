import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtScheduling } from './ot-scheduling';

describe('OtScheduling', () => {
  let component: OtScheduling;
  let fixture: ComponentFixture<OtScheduling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtScheduling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtScheduling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
