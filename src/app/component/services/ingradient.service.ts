import { Injectable } from '@angular/core';
import { ingradient } from '../../Models/ingradient';

@Injectable({
  providedIn: 'root'
})
export class IngradientService {

  constructor() { }
  ingradientList:ingradient[]=[
  new ingradient ("tomato",30),
  new ingradient ("onion",10)];

  addIngradient(ingradient:ingradient)
  {this.ingradientList.push(ingradient);
  }
}
