import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsHouseCardComponent } from './hogwarts-house-card.component';

describe('HogwartsHouseCardComponent', () => {
  let component: HogwartsHouseCardComponent;
  let fixture: ComponentFixture<HogwartsHouseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogwartsHouseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsHouseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
