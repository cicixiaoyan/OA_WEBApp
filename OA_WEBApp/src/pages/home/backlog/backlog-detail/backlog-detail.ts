import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BacklogService } from '../backlogService';
import { NativeService } from '../../../../providers/NativeService';
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
                private backlogService: BacklogService,
                private nativeService: NativeService
            ) {
        console.log(this.navParams.get("id"));
        this.initializeItems();
    }

    initializeItems() {
        let data = {
            "Id": this.navParams.get("id"),
            "Uid": this.backlogService.httpService.globalData.Uid
        };
        this.backlogService.getDone(data).subscribe((resJson) => {
            if (resJson.Result){
                this.item = resJson.Data;
            }else{
                this.nativeService.showToast(resJson.Data);
                this.navCtrl.pop();
            }
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
