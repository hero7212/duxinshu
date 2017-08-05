import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { Step3Page } from '../step3/step3';

@IonicPage()
@Component({
  selector: 'page-step2',
  templateUrl: 'step2.html',
})
export class Step2Page {

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
    let modal = this.modalCtrl.create(Step3Page);
    modal.present();
    this.sharedProvider.num = this.sharedProvider.num+4;
  }

  no() {
    let modal = this.modalCtrl.create(Step3Page);
    modal.present();
  }

}
