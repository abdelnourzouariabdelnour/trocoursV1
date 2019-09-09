import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-passeoublier',
  templateUrl: './passeoublier.page.html',
  styleUrls: ['./passeoublier.page.scss'],
})
export class PasseoublierPage implements OnInit {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
