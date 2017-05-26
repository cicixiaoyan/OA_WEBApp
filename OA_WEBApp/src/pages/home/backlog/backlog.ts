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

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private backlogService: BacklogService) {
        this.data = { "page": 1, "size": 10 };   
        this._getNotDoneList(this.data);      
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Backlog');
    }

    doRefresh(refresher?: Refresher) {
        // this.initializeItems();
        this.moredata = true;
        this.items = [];
        if (this.work === "ontDone") {
            // ....
            this._getNotDoneList(this.data);
        }else {
            // ...
            this._getDoneList(this.data);
        }
        if (!!refresher){
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
                this._getNotDoneList(this.data);
            }else {
                // ...
                this._getDoneList(this.data);
            }
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    _getNotDoneList(data) {
        this.backlogService.getNotDoneList(data).subscribe(list => {
            if (list === []) {
                this.moredata = false;
            }else {
                this.items = this.items.concat(list);
            }
        });
    }

    _getDoneList(data) {
        this.backlogService.getDoneList(data).subscribe(list => {
            if (list === []) {
                this.moredata = false;
            }else {
                this.items = this.items.concat(list);
            }
        });
    }

}
