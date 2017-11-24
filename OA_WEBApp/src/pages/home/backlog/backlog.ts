import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';

import { BacklogDetail } from './backlog-detail/backlog-detail';
import { BacklogService } from "./backlogService";
/**
 * Generated class for the Backlog page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-backlog',
    templateUrl: 'backlog.html',
    providers: [BacklogService]
})
export class Backlog {
    work: string = "notDone";
    nxPage: any = BacklogDetail;
    params: any;
    items: any = [];
    moredata: boolean = true;
    data: any;
    isEmpty: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private backlogService: BacklogService) {
        this.data = { 
            "PageIndex": 1, 
            "PageSize": 10,
            "Status": this.backlogService.Status["notdone"],
            "Uid": this.backlogService.httpService.globalData.Uid
         };
        this.getNotDoneList(this.data);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Backlog');
    }

    doRefresh(refresher?: Refresher) {
        // this.initializeItems();
        this.moredata = true;
        this.data.PageIndex = 1;
        this.items = [];
        if (this.work === "notDone") {
            // ....
            this.data.Status = this.backlogService.Status["notdone"];
            this.getNotDoneList(this.data);
        } else {
            // ...
            this.data.Status = this.backlogService.Status["done"];
            this.getDoneList(this.data);
        }
        if (!!refresher) {
            setTimeout(() => {
                console.log('数据加载完成');
                refresher.complete();
            }, 1000);
        }

    }

    doInfinite(): Promise<any> {
        if (this.moredata) {
            if (this.work === "ontDone") {
                // ....
                this.getNotDoneList(this.data);
            } else {
                // ...
                this.getDoneList(this.data);
            }
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    private getNotDoneList(data) {
        this.backlogService.getNotDoneList(data).subscribe((resJson) => {
            if (resJson.Result && resJson.Result !== [] ){
                this.isEmpty = false;
                this.items = this.items.concat(resJson.Data);
            } else {
                this.moredata = false;
                this.isEmpty = this.data.PageIndex == 1 ? true : false;
            }
        });
    }

    private getDoneList(data) {
        this.backlogService.getDoneList(data).subscribe((resJson) => {
            if (resJson.Result && resJson.Result !== [] ){
                this.isEmpty = false;
                this.items = this.items.concat(resJson.Data);
            } else {
                this.moredata = false;
                this.isEmpty = this.data.PageIndex == 1 ? true : false;
            }
        });
    }

}
