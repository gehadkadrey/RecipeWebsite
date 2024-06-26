import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeModel } from '../../../Models/recipe-model';
import { ingradient } from '../../../Models/ingradient';
import { IngradientService } from '../../services/ingradient.service';
import { RecipeService } from '../../services/recipe.service';
import { Subscription } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  element: RecipeModel = {
    title: '',
    description: '',
    imagePath: '',
    ingradient: []
  };
  recipeForm!: FormGroup;
  private initForm() {
    let title = '';
    let description = '';
    let imagePath = '';
    let recipeIngradients = new FormArray<FormGroup>([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(1);
      title = recipe.title;
      description = recipe.description;
      imagePath = recipe.imagePath;

      // Check if the recipe has ingredients and populate the FormArray
      if (recipe.ingradient.length > 0) {
        for (let ingradient of recipe.ingradient) {
          recipeIngradients.push(new FormGroup({
            name: new FormControl(ingradient.name, Validators.required),
            amount: new FormControl(ingradient.amount, [Validators.required, Validators.min(1)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      description: new FormControl(description, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      ingradients: recipeIngradients
    });
  }
  private subscripe: Subscription | undefined;
  editMode: boolean = false;

  constructor(private ingradientService: IngradientService, private recipeService: RecipeService) { }
  ngOnInit() {
    this.initForm();
  }
  get Ingrads()
  {
    return (<FormArray>(this.recipeForm.get('ingradients'))).controls;
  }
  addToList(ingradinent: ingradient) {
    this.ingradientService.addIngradient(ingradinent);
  }
  ngOnDestroy(): void {
    if (this.subscripe) {
      this.subscripe.unsubscribe();
    }
  }
  onSubmit() {

  }

}
