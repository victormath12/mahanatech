import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  isDefined(value: any): boolean {
    return value === undefined ? false : true;
  }

}
