import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  selectedProduct: any;
  updatedProduct: any;
  quantityError: any;
  priceError: any;

  constructor(    
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['customId']);
      this.viewProduct(params['customId']);
    })

  }
  resetProductForm(){
    this.updatedProduct = {
      name: this.selectedProduct[0].name,
      price: this.selectedProduct[0].price,
      quantity: this.selectedProduct[0].quantity,
      customId: this.selectedProduct[0].customId
    };
  }

  viewProduct(customId){
    const obs = this._httpService.viewProduct(customId);
    obs.subscribe((data)=>{
      this.selectedProduct = data;
      this.resetProductForm();
    })
  }

  updateProduct(id){
    if(this.updatedProduct.price<0||this.updatedProduct.quantity<0){
      if(this.updatedProduct.price<0){
        this.priceError = "Can't have a negative price buddy, this is capitalism not charity"
      }
      if(this.updatedProduct.quantity<0){
        this.quantityError = "If you have negative stock, are you asking for people to send it to you?"
      }      
    }
    else{
      const obs = this._httpService.updateProduct(id, this.updatedProduct);
      obs.subscribe((data)=>{
        window.location.replace("/");
      })      
    }
  }

}
