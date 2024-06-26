import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { ingradient } from '../../../Models/ingradient';
import { IngradientService } from '../../services/ingradient.service';
import { RecipeModel } from '../../../Models/recipe-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent implements OnInit {
  constructor(private recipeService: RecipeService,private router:Router,
    private ingradientService: IngradientService, private activedRoute: ActivatedRoute) { }
  recipeForm!: FormGroup;
  index: number | null = null;
  editMode: boolean = false;
  recipe: RecipeModel={
    title: '',
    description: '',
    imagePath: '',
    ingradient: []
  };
  imagePreview: string | ArrayBuffer | null = null;
  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      this.index = params['id'] ? +params['id'] : null;
      //edit
      if (this.index !== null) {
        this.editMode = true;
        let title = '';
        let description = '';
        let imagePath = '';
        let recipeIngradients = new FormArray<FormGroup>([]);
        this.recipe = this.recipeService.getRecipe(this.index);
        title = this.recipe.title;
        description = this.recipe.description;
        imagePath = this.recipe.imagePath;

        // Check if the recipe has ingredients and populate the FormArray
        if (this.recipe.ingradient.length > 0) {
          for (let ingradient of this.recipe.ingradient) {
            recipeIngradients.push(new FormGroup({
              name: new FormControl(ingradient.name, Validators.required),
              amount: new FormControl(ingradient.amount, [Validators.required, Validators.min(1)])
            }));
          }

        }
        this.recipeForm = new FormGroup({
          title: new FormControl(title, Validators.required),
          description: new FormControl(description, Validators.required),
          imagePath: new FormControl(imagePath, Validators.required),
          ingradients: recipeIngradients
        });
        this.imagePreview=imagePath
        console.log(this.recipeForm.get('imagePath')?.value)
      }
      //add
      else {
        this.editMode = false
        this.recipeForm = new FormGroup({
          title: new FormControl('', Validators.required),
          description: new FormControl('', Validators.required),
          imagePath: new FormControl('', Validators.required),
          ingradients: new FormArray<FormGroup>([])
        });
      }
    });
  }
  get Ingrads() {
    return (<FormArray>(this.recipeForm.get('ingradients'))).controls;
  }
  addToList(ingred: any) {
    // Validate the form before adding
    if (this.recipeForm.invalid) {
      return;
    }
    let ingrant: ingradient = {
      name: '',
      amount: 0
    };
    ingrant.name = ingred.name;
    ingrant.amount = ingred.amount;
    this.ingradientService.addIngradient(ingrant);

  }

  addNewIngradident() {
    (<FormArray>this.recipeForm.get('ingradients')).push(new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1)])
    }))
  }
  AddListIngradientToShoppingList() {
    this.ingradientService.addListIngradient(this.recipe.ingradient);
  }
  onDelete() {
    if (this.index != null) {
      this.recipeService.OnDeleteRecipe(this.index);
      this.router.navigate(['recipe'])
    }
  }
  onSubmit() {
    if (this.recipeForm.invalid) {
      this.markFormGroupTouched(this.recipeForm);
      return;
    }

    const recipeItem: RecipeModel = {
      title: this.recipeForm.get('title')?.value,
      description: this.recipeForm.get('description')?.value,
      imagePath: this.recipeForm.get('imagePath')?.value,
      ingradient: this.recipeForm.get('ingradients')?.value
    };
    //edit
    if (this.editMode) {
      if (this.index != null) { this.recipeService.OnUpdateRecipe(this.index, recipeItem) }

    }
    //add
    else {
      this.recipeService.AddRecipe(recipeItem);
      this.recipeForm.reset();
    }
    this.onCancel();
  }
  removeIngredient(index: number) {
    const ingradientsFormArray = this.recipeForm.get('ingradients') as FormArray;
    ingradientsFormArray.removeAt(index);
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onCancel() {
this.router.navigate(['recipe'])
  }

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.recipeForm.patchValue({ imagePath: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }
  onClear()
  {
    this.recipeForm.reset();
    this.imagePreview="";
  }


}
