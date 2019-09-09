import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {ApiService} from "../api.service"

import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
  
})

export class WelcomePage {

  apiUrl:string; 
  myForm: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private http: HttpClient, private api: ApiService) {

      this.menuCtrl.enable(false);

      this.myForm = new FormGroup({
        log: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        mdp: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(4)
          // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]))
      });
      
  }


   loginBtn() {
     if(this.myForm.status == "INVALID"){
       console.error(this.myForm)
      alert("Erreur de login ou de mot de passe");
      return;
     }

    let data = {
      "email": this.myForm.value.log,
      "password": this.myForm.value.mdp    }
    
    this.api.post("login", data).subscribe((response) => {
      console.warn(response);
      console.log(data);
      this.navCtrl.navigateRoot("home");
    },
    (err) => {
      alert("error");
    });

   }
  
  }

  