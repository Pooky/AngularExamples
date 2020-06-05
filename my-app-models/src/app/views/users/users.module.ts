import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './components/user/users.component';


@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
