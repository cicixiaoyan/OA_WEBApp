import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BacklogDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-backlog-detail',
  templateUrl: 'backlog-detail.html',
})
export class BacklogDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get("id"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BacklogDetail');
  }

}
