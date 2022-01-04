import { Component, OnInit } from '@angular/core';
import { SeafoodsService } from "../seafoods.service";
import { baseUrl } from "../../constants/consntants";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetail: any = [];

  storageUrl = baseUrl + 'storage/';

  constructor(private _seafoodsService: SeafoodsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._seafoodsService.getProductDetails(this._activatedRoute.snapshot.params['id']).subscribe((res) => {
      this.productDetail = res
      console.log(this.productDetail)
    }
    )
  }

  addTocart() {
    this._seafoodsService.addTocart(this._activatedRoute.snapshot.params['id']).subscribe((res) => {
      console.log(res);
    }
    )
  }

}
