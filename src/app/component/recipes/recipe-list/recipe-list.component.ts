import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../../Models/recipe-model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipeList:RecipeModel[]=[];
 
  constructor(private recipeService:RecipeService,private router:Router,private activedRoute:ActivatedRoute){}
  // @Output() selectOne = new EventEmitter<RecipeModel>();
  // OnselectedElement(recipeDetails: RecipeModel) {
  //   this.selectOne.emit(recipeDetails);
  // }
  ngOnInit(): void {
   this.recipeList=this.recipeService.recipeList;
  }

onRecipeSelectedToEdit(index:number)
  {
  this.recipeService.RecipeSelectedToEditIndex.next(index);
  // this.router.navigate(['Details'],{ relativeTo:this.activedRoute});

  this.router.navigate(['AddEdit/'+index],{ relativeTo:this.activedRoute});
  }
 
  
}
