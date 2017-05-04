import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MailRead page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mail-read',
  templateUrl: 'mail-read.html',
})
export class MailRead {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    let elements = document.querySelectorAll(".tabbar");
    if(elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display ='none';
        });
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailRead');
  }

  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if(elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display ='flex';
        });
    }
  }



  read(){}

}
