import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers() : Promise<any>{
    return this.httpClient.get<any>("http://www.mocky.io/v2/5ed9f229330000670079e735").toPromise();
  }
}
