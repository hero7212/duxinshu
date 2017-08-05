import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { Step4Page } from '../step4/step4';

/**
 * Generated class for the Step3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step3',
  templateUrl: 'step3.html',
})
export class Step3Page {

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
    let modal = this.modalCtrl.create(Step4Page);
    modal.present();
    this.sharedProvider.num = this.sharedProvider.num+2;
  }

  no() {
    let modal = this.modalCtrl.create(Step4Page);
    modal.present();
  }

}
