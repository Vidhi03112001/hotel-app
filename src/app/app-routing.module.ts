import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  //Creating reservations
  {path:"list",component:ReservationListComponent},
  //Listening reservation
  {path:"new",component:ReservationFormComponent},
  //adding id parameter
  {path:"edit/:id",component:ReservationFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
