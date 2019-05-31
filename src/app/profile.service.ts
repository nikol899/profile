import { Injectable } from '@angular/core';
import{Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

users: any ={
  name:"Nicole",
  contact:"nicole.09@yahoo.com",
  bio:"jfkdjskaiejf,dsajifjids"
};

  constructor(private router:Router) { }

  getUserProfile():any {
     return this.users;
  }
  
  setUserProfile(userInfo){
    this.users=[{
      name:userInfo.name,
      contact: userInfo.contact,
      bio: userInfo.bio
    }]
    return this.users;
  };
  updateProfile(newInfo:any):void{
    this.users ={...newInfo};
    this.router.navigate(["/profile"]);
  }
  
}
