import { Component, OnInit } from '@angular/core';
import { SeafoodsService } from "../seafoods.service";
import { baseUrl } from "../../constants/consntants";

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  collection: any = [];
  storageUrl = baseUrl + 'storage/';

  constructor(private seafoods: SeafoodsService) {

  }

  ngOnInit(): void {
    this.seafoods.getProduct().subscribe((products) => {
      this.collection = products;

    })
  }

}
