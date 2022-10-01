import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /* attributes */
  public firstName = 'Unknown';
  public lastName = 'Doe';
  public age = 25;

  constructor() {}

  ngOnInit(): void {}

  /* methods */
  public increaseAge() {
    this.age++;
  }

  public decreaseAge() {
    this.age--;
  }

  public femaleName() {
    this.firstName = 'Jane';
  }

  public maleName() {
    this.firstName = 'John';
  }
}
