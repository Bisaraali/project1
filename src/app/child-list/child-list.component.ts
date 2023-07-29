import { Component, OnInit } from '@angular/core';
import { Children } from '../model/children';
import { ChildrenService } from '../service/children.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit{
OnUpdateChildren(arg0: number) {
throw new Error('Method not implemented.');
}
  children!: Children[];
OnViewcChildren: any;
  constructor(private childrenService:ChildrenService,
    private router: Router,
    private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.getAllChildren();
  }

  
  deleteChild(id:number){
    this.childrenService.deleteChildren(id).subscribe(data =>{
      console.log(data);
      this.getAllChildren()
    })

  }
   
     
   

    getAllChildren(){
      this.childrenService.getChildrensList().subscribe(data =>{
        this.children = data;
      })
    }
  

}
