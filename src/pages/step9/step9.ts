import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-step9',
  templateUrl: 'step9.html',
})
export class Step9Page {

  suit:string;
  num:number

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public sharedProvider: SharedProvider
  ) {
  }

  ionViewDidLoad() {
    this.suit = this.sharedProvider.suit;
    if(this.sharedProvider.num == 0) {
      this.num = 13;
    }else {
      this.num = this.sharedProvider.num;
    }

  }

  restart() {
    this.navCtrl.push(HomePage);
  }
  

}
