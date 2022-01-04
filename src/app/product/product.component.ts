import { Component, OnInit } from '@angular/core';
import { SeafoodsService } from "../seafoods.service";
import { baseUrl } from "../../constants/consntants";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  collection: any = [];
  storageUrl = baseUrl + 'storage/';


  constructor(private seafoods: SeafoodsService) {

  }


  ngOnInit(): void {
    this.seafoods.getProduct().subscribe((products) => {
      console.warn(products);
      this.collection = products;
      console.log(this.collection);
      console.log(this.storageUrl);

    })
  }

}
