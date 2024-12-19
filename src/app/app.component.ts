import { Component } from '@angular/core';
import { FactorialService } from './services/factorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  inputNumber: number = 0;
  result: number | null = null;
  error: string | null = null;

  constructor(private factorialService: FactorialService) {}

  calculateFactorial(): void {
    try {
      this.error = null;
      this.result = this.factorialService.factorial(this.inputNumber);
    } catch (err) {
      this.error = (err as Error).message;
      this.result = null;
    }
  }
}
