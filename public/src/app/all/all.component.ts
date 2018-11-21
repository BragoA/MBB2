import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  allP: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.all();
  }

  all(){
    const obs = this._httpService.viewAll();
    obs.subscribe((data)=>{
      this.allP = data;
    });
  }

}
