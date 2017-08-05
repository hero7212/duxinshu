import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { Step6Page } from '../step6/step6';



@IonicPage()
@Component({
  selector: 'page-step5',
  templateUrl: 'step5.html',
})
export class Step5Page {

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
    let modal = this.modalCtrl.create(Step6Page);
    modal.present();
    
  }

  no() {
    let modal = this.modalCtrl.create(Step6Page);
    modal.present();
    this.sharedProvider.suit = 'clubs';
  }
  

}
