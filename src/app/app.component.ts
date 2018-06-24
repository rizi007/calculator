import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number;
  num2: number;
  operator: String;
  answer: number;

  onSubmit(event: Event) {
    event.preventDefault();
    this.calculate();
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.answer = this.num1 + this.num2;
        break;
      case '-':
        this.answer = this.num1 - this.num2;
        break;
      case '/':
        this.answer = this.num1 / this.num2;
        break;
      case '*':
        this.answer = this.num1 * this.num2;
        break;
    }
  }
}
