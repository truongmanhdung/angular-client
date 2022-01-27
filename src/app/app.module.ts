import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialExampleModule} from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ListtaskComponent } from './screens/listtask/listtask.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskeditComponent } from './components/taskedit/taskedit.component';
import { TaskcreateComponent } from './components/taskcreate/taskcreate.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { DateRangePickerOverviewExampleComponent } from './components/date-range-picker-overview-example/date-range-picker-overview-example.component';
import {MatNativeDateModule} from '@angular/material/core';
import { LoadingComponent } from './components/loading/loading.component';
import { ProfileEmailComponent } from './components/profile-email/profile-email.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ListtaskComponent,
    NavbarLeftComponent,
    NavbarTopComponent,
    TaskeditComponent,
    TaskcreateComponent,
    ProfileComponent,
    DateRangePickerOverviewExampleComponent,
    LoadingComponent,
    ProfileEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
