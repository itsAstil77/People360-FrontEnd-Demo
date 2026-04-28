import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentMaster } from './equipment-master';

describe('EquipmentMaster', () => {
  let component: EquipmentMaster;
  let fixture: ComponentFixture<EquipmentMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentMaster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
