import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { BacklogService } from "./backlogService";
import { GlobalData } from '../../../providers/GlobalData';

@IonicPage()
@Component({
    selector: 'page-backlog',
    templateUrl: 'backlog.html',
    providers: [BacklogService]
})
export class Backlog {
    work: string = "notDone";
    // nxPage: any = "BacklogDetail";
    params: any;
    items: any = [];
    moredata: boolean = true;
    data: any;
    isEmpty: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public globalData: GlobalData,
                private backlogService: BacklogService) {
        this.data = {
            "PageIndex": 0,
            "PageSize": 10,
            "Status": this.backlogService.Status["notdone"],
            "uid": this.globalData.Uid
         };
        this.getList(this.data);
    }

    ionViewDidEnter(){
        
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Backlog');
    }

    view(work){
        this.navCtrl.push("BacklogDetail", {"param": work});
    }

    doRefresh(refresher?: Refresher) {
        // this.initializeItems();
        this.moredata = true;
        this.data.PageIndex = 0;
        this.items = [];

        this.data.Status = this.work === "notDone" ?
            this.backlogService.Status["notdone"] :
            this.backlogService.Status["done"];

        this.getList(this.data);
        if (!!refresher) {
            setTimeout(() => {
                refresher && refresher.complete();
            }, 1000);
        }

    }

    doInfinite(): Promise<any> {
        if (this.moredata) {
            this.data.PageIndex++;
            this.getList(this.data);
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    private getList(data) {
        this.backlogService.getList(data).subscribe((resJson) => {
            if (resJson.Result  && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string" ){
                this.isEmpty = false;
                this.items = this.items.concat(resJson.Data);
            } else {
                this.moredata = false;
                this.isEmpty = this.data.PageIndex === 0 ? true : false;
            }
        });
    }

}
