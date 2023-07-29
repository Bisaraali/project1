import { Component, OnInit } from '@angular/core';
import { ChildrenService } from '../service/children.service';
import { Router } from '@angular/router';
import { Children } from '../model/children';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'] 
})
export class ChildrenComponent implements OnInit {
  id!: number;
  children: Children =new Children();
  // submitted: boolean | undefined;
  // childrenservice: any;

//   userform: FormGroup = new FormGroup({
//     id: new FormControl("0", [Validators.required]),
//     fname: new FormControl("", [Validators.required]),
//     lname: new FormControl("", [Validators.required]),
//     email: new FormControl("", [Validators.required]),
//     phone: new FormControl("",[Validators.required]),
//     username:new FormControl("",[Validators.required]),
//     pass:new FormControl ("",[Validators.required])
//   });
// user: any;


  constructor(
    private childrenservice:ChildrenService,
    private router:Router){}

    ngOnInit(): void {
      // this.getChildren();
    }
    getChildren(){
      this.childrenservice.getChildren(this.id).subscribe(data =>{
        this.children = data;
      }, error => console.log(error));
    }
    updateChildren(id:number){
      this.router.navigate([])
    }
  //   children: Children = new Children();
  // submitted = false;

  addNewChildren(){
    this.childrenservice.createChildren(this.children).subscribe((Response: any) =>{
      console.log(Response);
    },(error: any) => console.log(error));
  }

  newChildren(): void {
    // this.submitted = false;
    // this.children = new Children();
  }

  // save(): void {
  //   this.childrenS.createChildren(this.children).subscribe(data => {
  //     console.log(data)
  //     // this.children = new Children();
  //     this.gotoList();
  //   },
  //   error => console.log(error));
  // }

  onSubmit() {
  this.addNewChildren();
  console.log(this.children);
  }

  gotoList() {
    this.router.navigate(['/childrens']);
  }
  
}
