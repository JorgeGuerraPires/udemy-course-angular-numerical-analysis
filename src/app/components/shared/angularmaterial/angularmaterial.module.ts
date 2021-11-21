import { NgModule } from '@angular/core';

//Add Angular material to add

//1. import the API from Angular Material Library
import { MatToolbarModule } from '@angular/material/toolbar';


//All the angular material imports come here
//2. import into our app
const angularmaterial = [MatToolbarModule];



@NgModule({

  imports: [...angularmaterial],
  exports: [...angularmaterial]
})
export class AngularmaterialModule { }
