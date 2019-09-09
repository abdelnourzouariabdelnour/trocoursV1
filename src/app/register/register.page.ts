import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ApiService} from "../api.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  myForm: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private api: ApiService) {
    this.menuCtrl.enable(false);

    this.myForm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      prenom: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      pseudo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      Select: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Select2: new FormControl('', Validators.compose([
        Validators.required,
      ])),

      Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
      ,
      Email2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      mdp: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4)

      ])),
      mdp2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
 
      ]))



    });
    
   }

   registerBtn() {
    if(this.myForm.status == "INVALID"  ){
      console.error(this.myForm)
     alert("tout les champs ne sont pas correctement remplis");
     return;
    }

    if( this.myForm.Email != this.myForm.Email2 ){
      console.error(this.myForm)
     alert("la confirmation de mail ne correspond pas");
     return;
    }

    
    
    if( this.myForm.mdp !=  this.myForm.mdp2 ){
      console.error(this.myForm)
     alert("la confirmation de mot de passe ne correspond pas");
     return;
    }

    let info = {
      "lastName": this.myForm.value.name,
      "firstName": this.myForm.value.prenom,
      "pseudo": this.myForm.value.pseudo, 
      "email": this.myForm.value.Email,
      "password": this.myForm.value.mdp,
      "universite": this.myForm.value.Select,
      "niveauEtude": this.myForm.value.Select2
    }
   
   this.api.post("register", info).subscribe((response) => {
     console.warn(response);
     console.log(info);
     this.navCtrl.navigateRoot("home");
   
   },
   (err) => {
     alert("L'adresse Email utilisé existe déjà");
   });

  }

}
