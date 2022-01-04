import { Component, OnInit } from '@angular/core';
import { SeafoodsService } from "../seafoods.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any = [];

  constructor(private _seafoodsService: SeafoodsService) { }

  ngOnInit(): void {
    this._seafoodsService.getUserData().subscribe((user) => {
      this.userData = user
      console.log(this.userData.name)
    }
    )
  }

  logout() {
    this._seafoodsService.logoutUser()
  }

}
