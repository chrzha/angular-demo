import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
 
  users: User[];
  displayedColumns: string[] = ['id', 'name', 'email'];
  usersDataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userService: UserService) {
  }
 
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.usersDataSource = new MatTableDataSource<User>(this.users);
      this.usersDataSource.paginator = this.paginator;
      this.usersDataSource.sort = this.sort;
    });
  }
  ngAfterViewInit(): void {
  }
}

/* sample code */
interface Student {
  name: string;
  unit: string;
  color?: string;
}

class Employee implements Student {
  name: string;
  unit: string;
  color: string;
  age: number;
}

class Person extends Employee {
  city: string;
}

let stu: Student = {name: "test", unit: "unit", color: 'blue'};
let emp: Employee = {name: "etest", unit: "unit", color: 'blue', age: 20};
let person: Person = {name: "ptest", unit: "unit", color: 'blue', age: 20, city: 'SH'};

console.log(stu);
console.log(emp);
console.log(person);

class Greet {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
  greet() {
    return 'hello ' + this.message;
  }
}

let greet = new Greet('chrzha');
console.log(greet.greet());

/* function define*/
function add_func(a: number, b: number): number {
  return a + b;
}

let result: number = add_func(1, 3);
console.log(result);

/* Generic Type*/
function generic_func(a: any): any {
  return a;
}
let res = generic_func(10000);
console.log(res);

function generic_funcT<T>(a: T): T {
  return a;
}
let resT = generic_funcT<number>(12);
console.log(resT);