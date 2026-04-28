import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visitorpermit } from './visitorpermit';

describe('Visitorpermit', () => {
  let component: Visitorpermit;
  let fixture: ComponentFixture<Visitorpermit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visitorpermit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visitorpermit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
