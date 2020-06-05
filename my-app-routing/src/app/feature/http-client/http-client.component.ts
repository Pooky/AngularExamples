import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  constructor(private httpClient: HttpClient) {


  }

  ngOnInit(): void {
  }

  async sendMessage(){

    try{
      console.log("Clicked!");

      let arr = [];
      for(let i = 1; i < 4; i++){
        arr.push(this.httpClient.get(`https://jsonplaceholder.typicode.com/posts`).toPromise())
      }


      console.log(await Promise.all(arr));
    }catch(e){
      console.log(e);
    }
    //console.log(result);


  }

}
