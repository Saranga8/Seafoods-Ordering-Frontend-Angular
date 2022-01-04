import { Component, OnInit } from '@angular/core';
import { SeafoodsService } from "../seafoods.service";
import { baseUrl } from "../../constants/consntants";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  collection: any = [];
  storageUrl = baseUrl + 'storage/';

  constructor(private _seafoodsService: SeafoodsService, private _router: Router) { }

  ngOnInit(): void {
    this._seafoodsService.getCartdata().subscribe((products) => {
      console.warn(products);
      this.collection = products;
      console.log(this.collection);

    })
  }

}
