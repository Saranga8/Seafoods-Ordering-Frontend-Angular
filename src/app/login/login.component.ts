import { Component, OnInit } from '@angular/core';
import { SeafoodsService } from "../seafoods.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = <any>{}
  constructor(private seafoods: SeafoodsService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginUserData);
    this.seafoods.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res.token),
          localStorage.setItem('token', res.token),
          this._router.navigate(['/product'])
      }
    )
  }
}
