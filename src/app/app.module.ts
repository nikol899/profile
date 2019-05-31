import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import{FormsModule} from '@angular/forms';
const appRoute: Routes=[
  {path:"", redirectTo: "/profile",pathMatch:"full"},
{path:"profile", component: ProfileComponent },
{path: "edit", component:EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
