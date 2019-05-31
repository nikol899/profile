import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../profile.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
users:any;
  constructor(private profileService:ProfileService,private router:Router) { }

  ngOnInit() {
    this.users=this.profileService.getUserProfile();
  }
  saveProfile(newInfo:any){
  this.profileService.updateProfile(newInfo);
}

}