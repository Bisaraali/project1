import { Component, OnInit } from '@angular/core';
import { Vaccination } from '../model/vaccination';
import { VaccinationService } from '../service/vaccination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit{
  vaccination:Vaccination=new Vaccination();
  constructor(private vaccinationService:VaccinationService,private router: Router){}
  ngOnInit(): void {
    
  }
onSubmit() {
  this.vaccinationService.createVaccination(this.vaccination).subscribe(data=>{
    console.log(data);
    console.log("Success");
    this.router.navigate(["/Dashboard/VaccinationList"]);
  })
}


}
