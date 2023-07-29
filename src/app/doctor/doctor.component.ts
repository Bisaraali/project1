import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
doct:Doctor= new Doctor();
constructor(private doctService:DoctorService, private router:Router){}

ngOnInit(): void {


}
onSubmit() {
  this.doctService.createDoctor(this.doct).subscribe(data=>{
    console.log(data);
    console.log("Success");
    this.router.navigate(["/Dashboard/DoctorList"]);
  })

}


}
