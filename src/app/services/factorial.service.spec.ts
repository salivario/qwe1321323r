import { TestBed } from '@angular/core/testing';
import { FactorialService } from './factorial.service';

describe('FactorialService', () => {
  let service: FactorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactorialService);
  });

  it('should calculate factorial of 0 as 1', () => {
    expect(service.factorial(0)).toBe(1);
  });

  it('should calculate factorial of 1 as 1', () => {
    expect(service.factorial(1)).toBe(1);
  });

  it('should calculate factorial of 5 as 120', () => {
    expect(service.factorial(5)).toBe(120);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => service.factorial(-1)).toThrowError(
      'Factorial is not defined for negative numbers'
    );
  });
});
