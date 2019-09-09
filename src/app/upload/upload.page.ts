import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ApiService} from "../api.service"
import { ToastController } from '@ionic/angular';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage{

  myForm: any;
  toast: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private api: ApiService, public toastCtrl: ToastController)
  {

    this.myForm = new FormGroup({
      nomDuCours: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(2)
      ])),
      nomduprof: new FormControl('', Validators.compose([
          Validators.minLength(2)
      ])),
      select3: new FormControl('', Validators.compose([
          Validators.required
      ])),
      select4: new FormControl('', Validators.compose([
          Validators.required
      ])),
      description: new FormControl('', Validators.compose([
        
      ])),
      upload: new FormControl('', Validators.compose([
          
      ])),
      check: new FormControl('', Validators.compose([
          Validators.required
      ])),

    

      
 })


  }


  async presentToast() {
    this.toast = await this.toastCtrl.create({
      message: 'Félicitation, l \'envoi du cours s \'est correctement déroulé.',
      duration: 3000
    });
    this.toast.present();
  }

  terminerBtn() {
    // if(this.myForm.status == "INVALID"  ){
    //  console.error(this.myForm)
    // alert("tout les champs ne sont pas correctement remplis");
   //   return;
   // }

  

    let info = {
      "nomducours": this.myForm.value.nomDuCours,
      "nomduprof": this.myForm.value.nomduprof,
      "select": this.myForm.value.select3, 
      "select2": this.myForm.value.select4,
      "description": this.myForm.value.description,
      "check": this.myForm.value.check,
      "file": this.myForm.value.upload,
    
    }
   
   this.api.post("upload", info).subscribe((response) => {
     console.warn(response);
     console.log(info);

     this.presentToast();
     this.navCtrl.navigateRoot("home");
   },


   (err) => {
     alert("error");
   });


  }
}




