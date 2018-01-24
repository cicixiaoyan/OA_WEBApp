import { Component, ViewChild } from '@angular/core';
import {
    IonicPage, NavController, NavParams, PopoverController,
    Refresher, ViewController
} from 'ionic-angular';
import { FileApplicationService } from '../fileApplicationService';

@IonicPage()
@Component({
    selector: 'page-file-application-list',
    templateUrl: 'file-application-list.html',
})
export class FileApplicationListPage {

    list: Array<any> = [];
    data: any;
    moredata: boolean = true;
    isEmpty: boolean = false;
    search: any;
    checkBtn: object = { "审批中": true, "已同意": false, "已拒绝": false };
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private popoverCtrl: PopoverController,
                private fileApplicationService: FileApplicationService) {
        this.data = {
            "uid": this.fileApplicationService.httpService.globalData.Uid,
            "status": this.fileApplicationService.status['审批中'],
            "PageIndex": 0,
            "PageSize": 8
        };
        
    }
    ionViewWillEnter() {
        this.list = [];
        this.getList(this.data);
      }

    // 选择
    checkRead(name: string = "审批中") {
        this.data.PageIndex = 0;
        this.list = [];
        this.checkBtn = { "审批中": false, "已同意": false, "已拒绝": false };
        this.checkBtn[name] = true;
        if (name === "审批中") {
            // 参数设置
            this.data.status = this.fileApplicationService.status["审批中"];
        }
        else if (name === "已同意") {
            // 参数设置
            this.data.status = this.fileApplicationService.status["已同意"];
        }
        else {
            // 参数设置
            this.data.status = this.fileApplicationService.status["已拒绝"];
        }
        this.getList(this.data);
    }

    doWrite() {
        this.navCtrl.push("FileApplicationAddPage");
    }

    doRefresh(refresher: Refresher) {
        this.list = [];
        this.data.PageIndex = 0;
        this.getList(this.data);
        setTimeout(() => {
            refresher && refresher.complete();
        }, 1000);
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

        this.fileApplicationService.getList(data).subscribe((resJson) => {
          if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
            this.moredata = true;
            this.isEmpty = false;
            let list = resJson.Data;
            this.list = [...this.list, ...list];
          }else{
            this.moredata = false;
            this.isEmpty = (this.data.PageIndex == 0) ? true : false;
          }
        });


    }


}
