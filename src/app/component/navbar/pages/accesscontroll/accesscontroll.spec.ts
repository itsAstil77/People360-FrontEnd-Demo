import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accesscontroll } from './accesscontroll';

describe('Accesscontroll', () => {
  let component: Accesscontroll;
  let fixture: ComponentFixture<Accesscontroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accesscontroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accesscontroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
