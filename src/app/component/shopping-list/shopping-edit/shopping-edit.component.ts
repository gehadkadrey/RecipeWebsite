import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { RecipeModel } from '../../../Models/recipe-model';
import { ingradient } from '../../../Models/ingradient';
import { Subscription } from 'rxjs';
import { IngradientService } from '../../services/ingradient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private subscript: Subscription | undefined;

  ingrad: ingradient = {
    name: '',
    amount: 0
  };
  editMode: boolean = false;
  IngradForm: FormGroup | any;
  index: number = 0;
  isSubmit: boolean = false;
  constructor(private ingradtientService: IngradientService, private fb: FormBuilder) {
    this.IngradForm = this.fb.group({
      name: ['', Validators.required],
      amount: [0, Validators.required]
    })
  }

  ngOnInit(): void {
    debugger;
    this.subscript = this.ingradtientService.selectedIngradient.subscribe((index: number) => {
      debugger;
        this.editMode = true;
        this.index = index
        this.ingrad = this.ingradtientService.getIngradient(index);
        this.IngradForm.setValue({
          name: this.ingrad.name,
          amount: this.ingrad.amount,
        })
      //  this.editMode = true;

    })
  }
  get getname() {
    return this.IngradForm.controls['name']
  }
  get getamount() {
    return this.IngradForm.controls['amount']
  }
  onSubmit() {
    this.isSubmit = true;
    if (this.IngradForm?.invalid) {
      return;
    }
  
    else {
      debugger;
      this.ingrad.name = this.IngradForm?.controls['name'].value;
      this.ingrad.amount = this.IngradForm?.controls['amount'].value;
      if (this.editMode) {
        this.ingradtientService.editIngradient(this.ingrad, this.index);
     //   this.editMode = false
        console.log("editmode",this.editMode)
      }
      else {
      //  this.editMode = true
        this.ingradtientService.addIngradient(this.ingrad);
        console.log("addmode",this.editMode)
      }
      this.editMode=false;
      this.OnClear();
    }

  }
  //////
  OnClear() {
    this.IngradForm.reset();
  }
  OnDelete() {
    this.ingradtientService.deleteIngradient(this.index);
    this.OnClear();
  }
  ngOnDestroy(): void {
    if (this.subscript) {
      this.subscript.unsubscribe();
    }
  }

  /////

}
