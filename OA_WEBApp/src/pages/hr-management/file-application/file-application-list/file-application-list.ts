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
    pageSlides: Array<string> = ["审批中", "已同意", "已拒绝"];
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
        this.data.PageIndex = 0;
        this.getList(this.data);
      }

    onSlideClick(i: number) {
        this.data.PageIndex = 0;
        this.list = [];
        if (i === 0) {
            // 参数设置
            this.data.status = this.fileApplicationService.status["审批中"];
        }
        else if (i === 1) {
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
