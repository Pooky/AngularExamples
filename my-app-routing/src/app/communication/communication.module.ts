import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {Routes, RouterModule} from "@angular/router"


const routes: Routes = [
  {
    path: "",
    component: ParentComponent
  }
]


@NgModule({
  declarations: [
    ParentComponent, ChildComponent
    ],
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [ParentComponent]
})
export class ComunicationModule { }
