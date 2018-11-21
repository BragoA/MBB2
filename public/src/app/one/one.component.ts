import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  selectedProduct: any;
  canDel: any;

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

  viewProduct(customId){
    const obs = this._httpService.viewProduct(customId);
    obs.subscribe((data)=>{
      this.selectedProduct = data;
      if(this.selectedProduct['0'].quantity>0){
        this.canDel = false;
      }
      else{
        this.canDel = true;
      }
    });
  }

  deleteProduct(id){
    const obs = this._httpService.deleteProduct(id);
    obs.subscribe((data)=>{
      window.location.replace("/");
    });
  }
}
