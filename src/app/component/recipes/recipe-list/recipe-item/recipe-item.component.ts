import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../../../../Models/recipe-model';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
@Input() element!:RecipeModel;
// @Output() selectRecipe = new EventEmitter<RecipeModel>();
// onSelectRecipe(recipeData:RecipeModel)
// {
// this.selectRecipe.emit(recipeData);
// }

}
