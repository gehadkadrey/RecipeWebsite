import { Component } from '@angular/core';
import { ingradient } from '../../Models/ingradient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingradientList:ingradient[]=[new ingradient ("tomato",30),
  new ingradient ("onion",10)
  ];
  AddNewIngradient(element:ingradient)
  {
this.ingradientList.push(element);
  }
}
