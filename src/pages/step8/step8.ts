import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { Step9Page } from '../step9/step9';



@IonicPage()
@Component({
  selector: 'page-step8',
  templateUrl: 'step8.html',
})
export class Step8Page {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public sharedProvider: SharedProvider
  ) {
  }

  ionViewDidLoad() {

  }

  
  yes() {
    let modal = this.modalCtrl.create(Step9Page);
    modal.present(); 
  }

  no() {
    let modal = this.modalCtrl.create(Step9Page);
    modal.present();
    this.sharedProvider.suit = 'diamonds';
  }
  

}
