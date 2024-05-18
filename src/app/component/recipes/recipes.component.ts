import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../Models/recipe-model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
selectElement!:RecipeModel; 
}
