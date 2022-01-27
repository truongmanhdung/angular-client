import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEmailComponent } from './components/profile-email/profile-email.component';
import { TaskcreateComponent } from './components/taskcreate/taskcreate.component';
import { TaskeditComponent } from './components/taskedit/taskedit.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ListtaskComponent } from './screens/listtask/listtask.component';
import { LoginComponent } from './screens/login/login.component';
import { ProfileComponent } from './screens/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list-task',
    component: ListtaskComponent
  },
  {
    path: 'create-task',
    component: TaskcreateComponent
  },
  {
    path: 'edit-task/:id',
    component: TaskeditComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/email',
    component: ProfileEmailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
