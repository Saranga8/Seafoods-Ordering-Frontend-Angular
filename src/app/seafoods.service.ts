import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { baseUrlApi } from "../constants/consntants";
import { token } from "../constants/consntants";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SeafoodsService {

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };


  private loginUrl = baseUrlApi + "login";
  createPro = baseUrlApi + "product/store";
  url = baseUrlApi + "product/index";
  profileUrl = baseUrlApi + "profile";
  cartUrl = baseUrlApi + "show_cart";
  AddcartUrl = baseUrlApi + "add_to_cart";
  constructor(private http: HttpClient, private _router: Router) { }

  getProduct() {
    return this.http.get(this.url, this.requestOptions);
  }

  getProductDetails(id: any) {
    return this.http.get('http://127.0.0.1:8000/api/product/show/' + id, this.requestOptions);
  }

  loginUser(user: any) {
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }



  getUserData() {
    return this.http.get(this.profileUrl, this.requestOptions)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getCartdata() {
    return this.http.get(this.cartUrl, this.requestOptions)
  }

  createProduct(product: any) {
    return this.http.post<any>(this.createPro, product);
  }

  addTocart(id: any) {
    return this.http.post<any>(this.AddcartUrl, id, this.requestOptions);
  }
}
