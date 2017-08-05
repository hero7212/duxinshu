import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Step1Page } from '../step1/step1';
import { SharedProvider } from '../../providers/shared/shared';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

  num:number;

  suit:string;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public sharedProvider: SharedProvider
  ) {

  }

  ionViewDidLoad() {
    //this.sharedProvider.num = 13;
  }

  toStep1() {
    let modal = this.modalCtrl.create(Step1Page);
    modal.present();
  }

}
