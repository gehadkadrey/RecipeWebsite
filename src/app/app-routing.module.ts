import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipeListComponent } from './component/recipes/recipe-list/recipe-list.component';

import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { AddEditComponent } from './component/recipes/add-edit/add-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'recipe', pathMatch: 'full' },
  {path:"recipe",component:RecipesComponent,
    children:[
      {path:"list",component:RecipeListComponent},
      // {path:"Details",component:RecipeDetailsComponent},
      { path: 'AddEdit/:id', component: AddEditComponent },
      { path: 'new', component: AddEditComponent },
    ]
  },
  {path:"shoppingList",component:ShoppingListComponent,
    children:[
      {path:"edit",component:ShoppingEditComponent}
    ]
  }
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
