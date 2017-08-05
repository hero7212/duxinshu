import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { Step5Page } from '../step5/step5';



@IonicPage()
@Component({
  selector: 'page-step4',
  templateUrl: 'step4.html',
})
export class Step4Page {

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
    let modal = this.modalCtrl.create(Step5Page);
    modal.present();
    this.sharedProvider.num = this.sharedProvider.num+1;
  }

  no() {
    let modal = this.modalCtrl.create(Step5Page);
    modal.present();
  }

}
