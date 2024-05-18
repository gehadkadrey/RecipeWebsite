import { Component, Output,EventEmitter } from '@angular/core';
import { RecipeModel } from '../../../Models/recipe-model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
recipeList:RecipeModel[]=[  new RecipeModel("recipe1"," description of recipe1","/assets/images/recipe1.jpg"),
new RecipeModel("recipe2","description of recipe2","/assets/images/recipe2.jpg"),
new RecipeModel("recipe3","description of recipe3","/assets/images/recipe1.jpg")
];
@Output() selectOne=new EventEmitter<RecipeModel>();
OnselectedElement(recipeDetails:RecipeModel)
{
this.selectOne.emit(recipeDetails);
}
}
