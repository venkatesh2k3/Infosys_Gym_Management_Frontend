import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SlotComponent } from './slot/slot.component';
import { BlogComponent } from './blog/blog.component';
import { TrainersComponent } from './trainers/trainers.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { BookingsComponent } from './bookings/bookings.component';
import { SlotDetailsComponent } from './slot-details/slot-details.component';
import { UsersComponent } from './users/users.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'reg',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'slot',
    component: SlotComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'trainers',
    component: TrainersComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'userdash',
    component: UserDashComponent,
  },
  {
    path: 'admindash',
    component: DashboardComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'slots',
    component: SlotDetailsComponent
  },
  {
    path: 'reglist',
    component: UsersComponent
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
