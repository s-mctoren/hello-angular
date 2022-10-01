import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MaterialComponents } from '../angular-material-components';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ...MaterialComponents
  ],
  exports: [
    ProfileComponent
  ]
})
export class MiscModule { }
