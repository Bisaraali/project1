import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ChildrenComponent } from './children/children.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { DoctorComponent } from './doctor/doctor.component'
import { FormsModule } from '@angular/forms';
import { ChildListComponent } from './child-list/child-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { VaccinationListComponent } from './vaccination-list/vaccination-list.component';
import { DataMemberComponent } from './data-member/data-member.component';
import { UpdateChildrenComponent } from './update-children/update-children.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { UpdateVaccinationComponent } from './update-vaccination/update-vaccination.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewVaccinationComponent } from './view-vaccination/view-vaccination.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    DashboardComponent,
    HomeComponent,
    ChildrenComponent,
    VaccinationComponent,
    DoctorComponent,
    ChildListComponent,
    DoctorListComponent,
    VaccinationListComponent,
    DataMemberComponent,
    UpdateChildrenComponent,
    UpdateDoctorComponent,
    UpdateVaccinationComponent,
    ViewChildrenComponent,
    ViewDoctorComponent,
    ViewVaccinationComponent,
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
