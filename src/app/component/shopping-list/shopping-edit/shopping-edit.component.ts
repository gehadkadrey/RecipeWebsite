import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { RecipeModel } from '../../../Models/recipe-model';
import { ingradient } from '../../../Models/ingradient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('amount')amountRecipe!:ElementRef;
  @ViewChild('name') nameRecipe!:ElementRef;
  @Output() newIngradient=new EventEmitter<ingradient>();
  addItem(){
    const ingrad:ingradient= new ingradient(this.nameRecipe.nativeElement.value,this.amountRecipe.nativeElement.value);
this.newIngradient.emit(ingrad);
    
  }
  deleteItem(){}
  clearList(){}
}
