import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';

import { GlobalData } from "../../providers/GlobalData";
import { NativeService } from "../../providers/NativeService";

// import { MailRead } from '../mail/mail-read/mail-read';
// import { MailWrite } from '../mail/mail-write/mail-write';
// import { MailReadOutbox } from '../mail/mail-read-outbox/mail-read-outbox';
import { MailService } from "./mailService";
@IonicPage()
@Component({
    selector: 'page-mail',
    templateUrl: 'mail.html',
})
export class Mail {
    box: string = "inbox";
    inbox: boolean = true; // 默认为收件箱
    isDraft: boolean = false; // 默认为发件箱
    isEmpty: boolean = false;
    checkBtn: object = { "read": false, "unread": true, "all": false };
    list: any = [];
    moredata: boolean = true;
    data: any;
    
    canclick: boolean = true;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public globalData: GlobalData,
                private nativeService: NativeService,
                private modalCtrl: ModalController,
                private mailService: MailService) {
        this.data = {
            "PageSize": 8,
            "PageIndex": 0,
            "MailStatus": this.mailService.mailStatus["inbox"],
            "Uid": this.globalData.Uid,
            "Status": this.mailService.status["unread"]
        };
        this.initializeItems();
    }

    initializeItems() {
        this.doRefresh(null);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Mail');
    }

    // 选择已读、未读、全部
    checkRead(name: string = "read") {
        this.data.PageIndex = 0;
        this.list = [];
        this.checkBtn = { "read": false, "unread": false, "all": false };
        this.checkBtn[name] = true;
        if (name === "unread") {
            // 参数设置
            this.data.Status = this.mailService.status["unread"];
        }
        else if (name === "read") {
            // 参数设置
            this.data.Status = this.mailService.status["read"];
        }
        else {
            // 参数设置
            this.data.Status = this.mailService.status["all"];
        }
        this._getList(this.data);
    }

    // 选择草稿箱、发件箱
    checkDraft(bol: boolean = false) {
        this.data.PageIndex = 0;
        this.list = [];

        if (bol) {
            this.isDraft = true;
            // 参数设置
        } else {
            this.isDraft = false;
            // 参数设置
        }
        this._getList(this.data);
    }

    doRead(id) {
        this.navCtrl.push("MailRead", { "id": id, "MailStatus": this.mailService.mailStatus["inbox"] });
    }

    doReadOutBox(id) {
        this.navCtrl.push("MailRead", { "id": id, "MailStatus": this.mailService.mailStatus["outbox"] });
    }

    doWrite() {
        this.navCtrl.push("MailWrite");
    }

    doRefresh(refresher: Refresher) {
        console.log("加载更多");
        if (!this.canclick){
            // this.box = this.box === "inbox" ? "outbox" : "intbox";
            console.log("不能点击");
            return this.nativeService.showToast("点击太快了，请稍后！！！", 800);
        }else{
            console.log("可以点击");
        }

        this.moredata = true;
        this.canclick = false;
        this.list = [];
        this.data.PageIndex = 0;

        if (this.box === "inbox") {
            this.data.mailStatus = this.mailService.mailStatus["inbox"];
        } else {
            this.data.mailStatus = this.mailService.mailStatus["outbox"];
        }
        this._getList(this.data);
        setTimeout(() => {
            console.log('数据加载完成');
            this.canclick = true;
            refresher && refresher.complete();
        }, 1000);
    }

    doInfinite(): Promise<any> {
        if (this.moredata) {
            this.data.PageIndex++;
            this._getList(this.data);
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }
    
    _getList(data){
        this.mailService.getList(data).subscribe(resJson => {
            
            if (resJson.Result  && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
                this.isEmpty = false;
                let list = resJson.Data;
                this.list = [...this.list, ...list];
            }else{
                this.moredata = false;
                if (this.data.PageIndex === 0) {
                    this.isEmpty = true;
                    this.list = [];
                }
            }
        }, err => {console.log(err); });
    }

}
