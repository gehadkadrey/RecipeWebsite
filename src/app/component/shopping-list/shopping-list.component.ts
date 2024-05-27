import { Component, OnInit } from '@angular/core';
import { ingradient } from '../../Models/ingradient';
import { IngradientService } from '../services/ingradient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent  implements OnInit{
  ingradientList:ingradient[]=[];

  constructor(private ingradirntService:IngradientService){}
  ngOnInit(): void {
  this.ingradientList=  this.ingradirntService.ingradientList;
  }
  
  AddNewIngradient(element:ingradient)
  {
 // this.ingradientList.push(element);
 this.ingradirntService.addIngradient(element);
  }
}
