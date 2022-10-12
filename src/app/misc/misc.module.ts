import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MaterialComponents } from '../angular-material-components';
import { HogwartsHouseCardComponent } from './hogwarts-house-card/hogwarts-house-card.component';
import { HogwartsHouseControllerComponent } from './hogwarts-house-controller/hogwarts-house-controller.component';



@NgModule({
  declarations: [
    ProfileComponent,
    HogwartsHouseCardComponent,
    HogwartsHouseControllerComponent
  ],
  imports: [
    CommonModule,
    ...MaterialComponents
  ],
  exports: [
    ProfileComponent,
    HogwartsHouseCardComponent,
    HogwartsHouseControllerComponent
  ]
})
export class MiscModule { }
