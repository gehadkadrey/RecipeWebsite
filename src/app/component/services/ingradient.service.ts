import { Injectable } from '@angular/core';
import { ingradient } from '../../Models/ingradient';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngradientService {

  constructor() { }
  ingradientList: ingradient[] = [
    new ingradient("tomato", 30),
    new ingradient("onion", 10)];
  selectedIngradient = new Subject<number>();

  addIngradient(ingradient: ingradient) {
    console.log(ingradient,"services")
    this.ingradientList.push(ingradient);
  }
  addListIngradient(ingradients: ingradient[]) {
    this.ingradientList.push(...ingradients);
  }
  editIngradient(ingradient: ingradient, index: number) {
    this.ingradientList[index] = ingradient;
  }
  deleteIngradient(index: number) {
    this.ingradientList.splice(index, 1);
  }
  getIngradient(index: number) {
    return this.ingradientList[index];
  }



}
