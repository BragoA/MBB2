import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  viewAll(){
    return this._http.get('/all');
  }
  viewProduct(customId){
    return this._http.get('/one/'+ customId);
  }
  updateProduct(id, update){
    return this._http.patch('/one/' + id, update);
  }
  deleteProduct(id){
    return this._http.delete('/one/' + id);
  }
  addProduct(product){
    return this._http.post('/one', product);
  }
}