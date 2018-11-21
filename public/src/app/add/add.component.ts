import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newProduct: any;
  errors: any;
  allProducts: any;
  Id: any;
  quantityError: any;
  priceError: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allProduct();
    this.resetProductForm();
  }

  resetProductForm(){
    this.newProduct = {
      name: '',
      price: '',
      quantity: '',
      customId: ''
    };
    
  }

  addProduct(){
    this.newProduct.customId = this.Id;
    if(this.newProduct.price<0||this.newProduct.quantity<0){
      if(this.newProduct.price<0){
        this.priceError = "Can't have a negative price buddy, this is capitalism not charity"
      }
      if(this.newProduct.quantity<0){
        this.quantityError = "If you have negative stock, are you asking for people to send it to you?"
      }      
    }
    else{
      const obs = this._httpService.addProduct(this.newProduct);
      obs.subscribe((data)=>{
        if(data['errors']){
          this.errors = data['errors'];
        }
        else{
          this.resetProductForm();
          window.location.replace("/");
        }
      });      
    }
  }

  allProduct(){
    const obs = this._httpService.viewAll();
    obs.subscribe((data)=>{
      this.allProducts = data;
      this.Id = this.allProducts.length + 1;
    })
  }
}
