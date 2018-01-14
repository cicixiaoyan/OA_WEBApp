import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewworkDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-newwork-detail',
    templateUrl: 'newwork-detail.html',
})
export class NewworkDetail {
    title: string = "新建工作";
    firstStep: boolean = true;
    emergencyLevel: string;
    manager: string;
    department: string;
    role: string;
    review: string;
    phoneNotification: boolean = false;
    siteNotification: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(this.navParams.get("id"));
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewworkDetail');
    }
    showNextStep() {
        this.firstStep = false;
    }

    showfirstStep() {
        this.firstStep = true;
    }

    msgNotification = function (obj) {
        if (obj == 'site') {
            this.siteNotification = !this.siteNotification;
        } else {
            this.phoneNotification = !this.phoneNotification;
        }

    };
    submit(){}


}
