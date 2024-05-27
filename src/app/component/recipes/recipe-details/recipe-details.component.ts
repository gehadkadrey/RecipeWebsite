import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../Models/recipe-model';
import { ingradient } from '../../../Models/ingradient';
import { IngradientService } from '../../services/ingradient.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
@Input() element!:RecipeModel;

constructor(private ingradientService:IngradientService) {
  
  
}
addToList(ingradinent:ingradient)
{
this.ingradientService.addIngradient(ingradinent);
}

}
