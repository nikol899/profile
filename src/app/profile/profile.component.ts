import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../profile.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

users:any[];

  constructor(private profileService:ProfileService, private router:Router) { }

  ngOnInit() {
    this.users=this.profileService.getUserProfile();
  }
  editProfile(){
    this.router.navigate(["/edit"]);
  }
}
