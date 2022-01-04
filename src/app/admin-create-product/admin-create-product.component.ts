import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SeafoodsService } from "../seafoods.service";

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.css']
})
export class AdminCreateProductComponent implements OnInit {
  
  createProductData = <any>{}

  constructor(private seafoods: SeafoodsService, private _router: Router) { }

  ngOnInit(): void {
  }

  productCreate() {
    console.log(this.createProductData);
    this.seafoods.createProduct(this.createProductData).subscribe(
      response => {
        console.log(response),
          this._router.navigate(['/profile'])
      }
    )
  }

}
