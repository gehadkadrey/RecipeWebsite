import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RecipeModel } from '../../Models/recipe-model';
import { ingradient } from '../../Models/ingradient';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() {
  }
  recipeList: RecipeModel[] = [
    new RecipeModel("recipe1", " description of recipe1", "/assets/images/recipe1.jpg", [new ingradient("rice", 8), new ingradient("Potato", 10)]),
    new RecipeModel("recipe2", "description of recipe2", "/assets/images/recipe2.jpg", [new ingradient("tomato", 2), new ingradient("Beans", 8)]),
    new RecipeModel("recipe3", "description of recipe3", "/assets/images/recipe3.jpg", [new ingradient("Bitter gourd", 2), new ingradient("Green papaya", 12)]),
    new RecipeModel("recipe4", " description of recipe4", "/assets/images/recipe1.jpg", [new ingradient("Apple gourd", 5), new ingradient("Potato", 10)]),
  ];
  RecipeSelectedToEditIndex = new Subject<number>();
  getRecipe(index: number) {
    return this.recipeList[index];
  }
  OnUpdateRecipe(index: number, recipe: RecipeModel) {
    this.recipeList[index] = recipe
  }

  AddRecipe(recipe: RecipeModel) {
    this.recipeList.push(recipe);
  }

  OnDeleteRecipe(index: number) {
    this.recipeList.splice(index, 1);
  }
}
