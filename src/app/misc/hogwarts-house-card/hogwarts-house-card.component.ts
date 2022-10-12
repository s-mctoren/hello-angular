import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hogwarts-house-card',
  templateUrl: './hogwarts-house-card.component.html',
  styleUrls: ['./hogwarts-house-card.component.scss'],
})
export class HogwartsHouseCardComponent implements OnInit {
  @Input()
  public name: string = 'houseName';
  @Input()
  public score = 0;

  addFivePoints() {
    this.score = this.score + 5;
  }
  addTenPoints() {
    this.score = this.score + 10;
  }
  addFiftyPoints() {
    this.score = this.score + 50;
  }
  addHundPoints() {
    this.score = this.score + 100;
  }

  removeFivePoints() {
    this.score = this.score - 5;
  }
  removeTenPoints() {
    this.score = this.score - 10;
  }
  removeFiftyPoints() {
    this.score = this.score - 50;
  }
  removeHundPoints() {
    this.score = this.score - 100;
  }

  constructor() {}

  ngOnInit(): void {}
}
