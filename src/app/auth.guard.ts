import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SeafoodsService } from './seafoods.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _seafoodsService: SeafoodsService, private _router: Router) { }

  canActivate(): boolean {
    if (this._seafoodsService.loggedIn()) {
      return true;
    }
    else {
      this._router.navigate(['/login'])
      return false;
    }
  }
}
