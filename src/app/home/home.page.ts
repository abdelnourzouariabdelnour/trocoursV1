import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {ApiService} from "../api.service"
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export  class HomePage {
  public search: string='';

  constructor(public router: Router, private api: ApiService) {}


  searchBtn() {
    
    let navigationExtras: NavigationExtras = {
      state: {
        search: this.search,
        filter: {
          "test": 1,
          "test2": 2
        }
      }
    };

    this.router.navigate(["search"], navigationExtras);

    let data = {
      "search": this.search
    }

    this.api.post("search", data ).subscribe((response) => {
      console.warn(response);
      console.log(data);
  
    },
    (err) => {
      alert("error");
    });

    console.log(this.search);
   
   }
}
