import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() diaplayComponent=new EventEmitter<string>();
  Display(path:string)
  {
this.diaplayComponent.emit(path);
  }
}
