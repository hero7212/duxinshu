import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { Step8Page } from '../step8/step8';



@IonicPage()
@Component({
  selector: 'page-step7',
  templateUrl: 'step7.html',
})
export class Step7Page {

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
    let modal = this.modalCtrl.create(Step8Page);
    modal.present();
    
  }

  no() {
    let modal = this.modalCtrl.create(Step8Page);
    modal.present();
    this.sharedProvider.suit = 'space';
  }

}
