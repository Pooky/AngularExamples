import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/api/users.service';
import { User } from "src/app/core/models/UserModel";
import { UserInterface } from 'src/app/core/models/UserInterface';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<UserInterface>;
  
  constructor(private usersService: UsersService) { }

  async ngOnInit() {

    const response = await this.usersService.getUsers();

    this.users = [];

    response.forEach((element: any) => {
      this.users.push(new User(element["userId"], element["title"], element["text"]));
    });

  }

}
