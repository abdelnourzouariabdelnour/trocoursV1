import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from "../api.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export  class SearchPage implements OnInit {

 test : any;
 search: any;
 searchSearch: string;
 

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {
   
          this.route.queryParams.subscribe(params => {
      
          if (this.router.getCurrentNavigation().extras.state) {
            this.test = this.router.getCurrentNavigation().extras.state;
          //  console.warn(this.test);
            console.warn(this.test["search"]);
         
          }
          this.search= this.test["search"];
        //  this.test2 = Object.values(this.test);
        //  console.log(this.test2)

    });
  }

  
  searchBtn2() {

    this.search = this.searchSearch;

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

   
   }

  ngOnInit() {
    
  }

}
