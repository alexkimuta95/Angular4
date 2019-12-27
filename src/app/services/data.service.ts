import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { 
    console.log('Data service connected');
  }
  getPosts(){
   return  this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res);

  }
}
