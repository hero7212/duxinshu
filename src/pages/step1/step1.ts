import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { Step2Page } from '../step2/step2'

@IonicPage()
@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html',
})
export class Step1Page {

  num:number;

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
    let modal = this.modalCtrl.create(Step2Page);
    modal.present();
    this.sharedProvider.num = 8;
  }

  no() {
    let modal = this.modalCtrl.create(Step2Page);
    modal.present();
  }
}
