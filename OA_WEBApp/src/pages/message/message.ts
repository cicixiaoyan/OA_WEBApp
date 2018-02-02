import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher, Events, Content } from 'ionic-angular';

import { GlobalData } from "../../providers/GlobalData";
import { MessageService } from "./messageService";
import { NativeService } from '../../providers/NativeService';

@IonicPage()
@Component({
    selector: 'page-message',
    templateUrl: 'message.html',
})
export class MessagePage {

    box: string = "inbox";
    inbox: boolean = true; // 默认为收件箱
    isDraft: boolean = false; // 默认为发件箱
    isEmpty: boolean = false;
    list: any = [];
    moredata: boolean = true;
    data: any;
    timer: any;

    pageSlides: Array<string> = ["未读", "已读"];
    @ViewChild(Content) content: Content;

    canclick: boolean = true;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public globalData: GlobalData,
                private modalCtrl: ModalController,
                private nativeService: NativeService,
                public events: Events,
                private messageService: MessageService) {

    }

    ionViewWillEnter() {
        this.box = "inbox";
        this.data = {
            "PageSize": 5,
            "PageIndex": 0,
            "NewsStatus": this.messageService.Message["inbox"],
            "Uid": this.globalData.Uid,
            "Status": this.messageService.messageStatus["unread"],
        };
        this.list = [];
        this._getList(this.data);
    }

    onSlideClick(i: number){
        this.data.PageIndex = 0;
        this.list = [];
        if (i === 0) {
            // 参数设置
            this.data.Status = this.messageService.messageStatus["unread"];
        }
        else if (i === 1) {
            // 参数设置
            this.data.Status = this.messageService.messageStatus["read"];
        }
        this._getList(this.data);
      }

    doRead(Params) {
        this.navCtrl.push("MessageReadPage", { Params: Params });
    }

    doReadOutBox(Params) {
        this.navCtrl.push("MessageReadOutPage", { Params: Params });
    }

    doWrite() {
        let modal = this.modalCtrl.create("MessageWritePage");
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
        // this.navCtrl.push(MailWrite);
    }

    markup(index) {
        let data = {
            "uid": this.messageService.httpService.globalData.Uid,
            "id": this.list[index].Id
        };
        this.messageService.markup(data).subscribe(resJson => {
            if (resJson.Result) {
                this.list[index].Status = this.messageService.messageStatus["read"];

                this.events.publish("message: badgechange", 0);
            } else {
                this.nativeService.showToast(resJson.Data);
            }
        });
    }

    doRefresh(refresher: Refresher) {

        if (!this.canclick) {
            // this.box = this.box === "inbox" ? "outbox" : "intbox";
            console.log("不能点击", this.box);
            this.box = this.data.NewsStatus == this.messageService.Message["inbox"] ? "inbox" : "outbox";
            this.nativeService.showToast("速度太快了，请稍后！！！", 800);
            setTimeout(() => {
                refresher && refresher.complete();
            }, 300);
        } else {
            this.moredata = true;
            this.data.PageIndex = 0;
            this.canclick = false;
            this.list = [];
            this.content.resize();
            if (this.box === "inbox") {
                this.data.Status = this.messageService.messageStatus["unread"];
                this.data.NewsStatus = this.messageService.Message["inbox"]; // 收件
            }
            else this.data.NewsStatus = this.messageService.Message["outbox"]; // 发件

            this._getList(this.data);

            setTimeout(() => {
                console.log('数据加载完成');
                this.canclick = true;
                refresher && refresher.complete();
            }, 1500);
        }        
    }

    doInfinite(): Promise<any> {
        if (this.moredata) {
            this.data.PageIndex++;

            if (this.box === "inbox")
                this._getList(this.data);
            else
                this._getList(this.data);
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    _getList(data) {
        this.messageService.getList(data).subscribe(resJson => {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                this.moredata = false;
                this.isEmpty = false;
                let list = resJson.Data;
                this.list = [...this.list, ...list];
            } else {
                this.moredata = false;
                if (this.data.PageIndex === 0) {
                    // this.messageService.httpService.nativeService.showToast(resJson.Data);
                    this.isEmpty = true;
                    this.list = [];
                }
            }
        });
    }

}
