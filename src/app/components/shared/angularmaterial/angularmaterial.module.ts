import { NgModule } from '@angular/core';

//Add Angular material to add

//1. import the API from Angular Material Library
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


//All the angular material imports come here
//2. import into our app
const angularmaterial = [MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatDividerModule];



@NgModule({

  imports: [...angularmaterial],
  exports: [...angularmaterial]
})
export class AngularmaterialModule { }
