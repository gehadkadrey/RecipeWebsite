import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../../../Models/recipe-model';
import { ingradient } from '../../../Models/ingradient';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipeList: RecipeModel[] = [
  new RecipeModel("recipe1", " description of recipe1", "/assets/images/recipe1.jpg",[new ingradient("rice",8),new ingradient ("Potato",10)]),
  new RecipeModel("recipe2", "description of recipe2", "/assets/images/recipe2.jpg",[new ingradient("tomato",2),new ingradient ("Beans",8)]),
  new RecipeModel("recipe3", "description of recipe3", "/assets/images/recipe3.jpg",[new ingradient("Bitter gourd",2),new ingradient ("Green papaya",12)]),
  new RecipeModel("recipe4", " description of recipe4", "/assets/images/recipe1.jpg",[new ingradient("Apple gourd",5),new ingradient ("Potato",10)]),
];
  @Output() selectOne = new EventEmitter<RecipeModel>();
  OnselectedElement(recipeDetails: RecipeModel) {
    this.selectOne.emit(recipeDetails);
  }
}
