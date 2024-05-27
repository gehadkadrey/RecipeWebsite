import { ingradient } from "./ingradient";


export class RecipeModel{
//constructor(public title:string,public description:string,public imagePath:string){}
title!:string;
description!:string;
 imagePath!:string;
 ingradient?:ingradient[]=[];
 constructor(title:string,description:string, imagePath:string,ingradient:ingradient[]){
    this.title=title;
    this.description=description;
    this.imagePath=imagePath;
    this.ingradient=ingradient;
 }
}