import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../Models/recipe-model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
// selectElement!:RecipeModel; 
constructor(private router:Router,private activedRoute:ActivatedRoute,private recipeService:RecipeService){}
onAdd()
{
// this.router.navigate(['Details'],{ relativeTo: this.activedRoute })

this.router.navigate(['new'],{ relativeTo: this.activedRoute })
}
}
