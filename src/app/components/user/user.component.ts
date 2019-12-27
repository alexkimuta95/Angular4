import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.name = 'Alex Kimutai';
    this.age=25;
    this.email= 'alexkimutai200@gmail.com';
    this.address={
      street:'19th street',
      city:'Nairobi',
      state:'MA'
    }
    this.hobbies =['Write code','Watch Movies','Listen to Music'];
    this.hello='hello';

    this.dataService.getPosts().subscribe((posts) =>{
      // console.log(posts);
      this.posts=posts;
    });
  }
  onClick(){
    this.name= 'Concilia Chebet';
    this.hobbies.push('New Hobby');
  }
  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

}
interface Address{
  street:string,
  city:string,
  state:string
}
interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}