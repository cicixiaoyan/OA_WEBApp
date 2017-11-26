import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from "../login/login";
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({name: 'Welcome'})
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class Welcome {

    constructor(public viewCtrl: ViewController, public navParams: NavParams, private modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Welcome');
    }

    goToHome() {
        // this.navCtrl.setRoot(TabsPage, { index: 0 });
        this.viewCtrl.dismiss();
        let modal = this.modalCtrl.create(LoginPage);
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
    }

}
