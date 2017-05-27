import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../../../providers/HttpService";

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

    item: any = [];
    isComplete: boolean = false;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private httpService: HttpService) {
        console.log(this.navParams.get("id"));
        this.initializeItems();
    }

    initializeItems() {
        this.httpService.get('assets/data/backlog-done.json')
            .map(res => res.json())
            .subscribe(item => {
                this.item = item[0];
            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BacklogDetail');
    }

    approved() {
        console.log("审批通过");
    }

    overrule() {
        console.log("审批驳回");
    }

    cancel() {
        this.navCtrl.pop();
    }


}
