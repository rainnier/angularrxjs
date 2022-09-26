import { User } from './../models/user';
import { filter } from 'rxjs';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})
export class HttpExampleComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.userService.getUsers().subscribe(d => console.log(d));

    // this.userService.subject.subscribe(d => console.log(d));
    // this.userService.subject.next("hello1");
    // this.userService.subject.next("hello2");
    // this.userService.subject.next("hello3");
    // this.userService.subject.next("hello4");
    // this.userService.subject.next("hello5");

    // this.userService.subject.subscribe(d => console.log(d))
    // this.userService.subject.next("hello6");

    // this.userService.behavior.subscribe(d => console.log(d))

    // this.userService.behavior.next("hello1");
    // this.userService.behavior.next("hello2");
    // this.userService.behavior.next("hello3");

    // this.userService.behavior.subscribe(d => console.log(d))

    this.userService.replay.next("hello1")
    this.userService.replay.next("hello2")
    this.userService.replay.next("hello3")
    this.userService.replay.next("hello4")
    this.userService.replay.next("hello5")

    this.userService.replay.subscribe(d => console.log(d))


  }

  createUser() {
    const user = {
      name: "Jennica",
      age: 70,
      active: true
    }

    this.userService.create(user)
  }

  updateUser() {
    const user = {
      name: "Jennica Edit",
      age: 70,
      active: true,
      id: 7
    }

    this.userService.update(user)
  }

  deleteUser() {

    this.userService.delete(7)
  }

  
}
