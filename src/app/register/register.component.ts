import { Component, OnInit } from '@angular/core';
import { SeafoodsService } from "../seafoods.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = <any>{}

  constructor(private seafoods: SeafoodsService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerData);
    this.seafoods.loginUser(this.registerData).subscribe(
      res => {
        console.log(res.token),
          // localStorage.setItem('token', res.token),
          this._router.navigate(['/login'])
      }
    )
  }
}
