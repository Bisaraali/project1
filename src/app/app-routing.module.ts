import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ChildrenComponent } from './children/children.component';
import { HomeComponent } from './home/home.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ChildListComponent } from './child-list/child-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { VaccinationListComponent } from './vaccination-list/vaccination-list.component';
import { DataMemberComponent } from './data-member/data-member.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  
  {path:"reg",component:RegisterComponent},
  {
    path:"forget",component:ForgetComponent },
    {path:"Dashboard",component:DashboardComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"Children",component:ChildrenComponent},
      {path:"Vaccination",component:VaccinationComponent},
      {path:"Doctor",component:DoctorComponent},
      {path:"childrenList",component:ChildListComponent},
      {path:"DoctorList",component:DoctorListComponent},
      {path:"VaccinationList",component:VaccinationListComponent},
      {path:"DataMember",component:DataMemberComponent}


    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
