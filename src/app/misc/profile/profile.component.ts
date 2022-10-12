import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input()
  public firstName: string = "";
  @Input()
  public lastName = 'Doe';
  @Input()
  public age: number = 25;

  decreaseAge() {
    this.age--;
  }

  increaseAge() {
    this.age++;
  }

  femaleFirstName() {
    this.firstName = 'Jane';
  }

  maleFirstName() {
    this.firstName = 'John';
  }

  resetData() {
    this.firstName = 'Unknown';
    this.age = 25;
  }

  constructor() {}

  ngOnInit(): void {}
}
