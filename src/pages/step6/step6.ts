import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { Step7Page } from '../step7/step7';



@IonicPage()
@Component({
  selector: 'page-step6',
  templateUrl: 'step6.html',
})
export class Step6Page {

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
    let modal = this.modalCtrl.create(Step7Page);
    modal.present();
    
  }

  no() {
    let modal = this.modalCtrl.create(Step7Page);
    modal.present();
    this.sharedProvider.suit = 'heart'
  }
  

}
