import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../Models/recipe-model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
@Input() element!:RecipeModel;
}
