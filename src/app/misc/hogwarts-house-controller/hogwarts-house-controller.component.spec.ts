import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsHouseControllerComponent } from './hogwarts-house-controller.component';

describe('HogwartsHouseControllerComponent', () => {
  let component: HogwartsHouseControllerComponent;
  let fixture: ComponentFixture<HogwartsHouseControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogwartsHouseControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsHouseControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
