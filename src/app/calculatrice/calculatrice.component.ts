import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {
  public numberOne: number = 0;
  public numberTwo: number = 0;
  public result: number = 0;

  public generateFirstNumber() {
    this.numberOne = Math.random() * (10 - 1) + 1;
  }

  public generateSecondNumber() {
    this.numberTwo = Math.random() * (10 - 1) + 1;
  }

  public add() {
    this.result = this.numberOne + this.numberTwo;
  }

  public subtract() {
    this.result = this.numberOne - this.numberTwo;
  }

  public multiply() {
    this.result = this.numberOne * this.numberTwo;
  }

  public divise() {
    this.result = this.numberOne / this.numberTwo;
  }
}
