import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';

import { GlobalData } from "../../providers/GlobalData";

// import { MailRead } from '../mail/mail-read/mail-read';
// import { MailWrite } from '../mail/mail-write/mail-write';
// import { MailReadOutbox } from '../mail/mail-read-outbox/mail-read-outbox';
import { MailService } from "./mailService";
/**
 * Generated class for the Mail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
    inboxList: any = [];
    outboxList: any = [];
    moredata: boolean = true;
    inboxData: any;
    outboxData: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public globalData: GlobalData,
                private modalCtrl: ModalController,
                private mailService: MailService) {
        this.inboxData = {
            "PageSize": 5,
            "PageIndex": 1,
            "MailStatus": this.mailService.mailStatus["inbox"],
            "Uid": this.globalData.Uid,
            "Status": this.mailService.status["unread"]
        };

        this.outboxData = {
            "PageSize": 5,
            "PageIndex": 1,
            "MailStatus": this.mailService.mailStatus["outbox"],
            "Uid": this.globalData.Uid,
            "Status": this.mailService.status["unread"]
        };
        this.initializeItems();
    }

    initializeItems() {
        this._getInboxList(this.inboxData);
        this._getOutboxList(this.outboxData);
        console.log(this);

        setInterval(() => {
            console.log(this);
            this.getNewInboxList(this.inboxData);
       }, 50000);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Mail');
    }

    // 选择已读、未读、全部
    checkRead(name: string = "read") {
        this.inboxData.PageIndex = 1;
        this.inboxList = [];
        this.checkBtn = { "read": false, "unread": false, "all": false };
        this.checkBtn[name] = true;
        if (name === "unread") {
            // 参数设置
            this.inboxData.Status = this.mailService.status["unread"];
        }
        else if (name === "read") {
            // 参数设置
            this.inboxData.Status = this.mailService.status["read"];
        }
        else {
            // 参数设置
            this.inboxData.Status = this.mailService.status["all"];
        }
        this._getInboxList(this.inboxData);
    }

    // 选择草稿箱、发件箱
    checkDraft(bol: boolean = false) {
        this.outboxData.PageIndex = 1;
        this.outboxList = [];

        if (bol) {
            this.isDraft = true;
            // 参数设置
        } else {
            this.isDraft = false;
            // 参数设置
        }
        this._getOutboxList(this.outboxData);
    }

    doRead(id) {
        this.navCtrl.push("MailRead", { "id": id, "MailStatus": this.mailService.mailStatus["inbox"] });
    }

    doReadOutBox(id) {
        this.navCtrl.push("MailRead", { "id": id, "MailStatus": this.mailService.mailStatus["outbox"] });
    }

    doWrite() {
        let modal = this.modalCtrl.create("MailWrite");
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
        // this.navCtrl.push(MailWrite);
    }

    doRefresh(refresher: Refresher) {
        console.log("加载更多");
        // this.initializeItems();
        this.change();
        setTimeout(() => {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    }

    change(){
        this.moredata = true;
        if (this.box === "inbox") {
            this.inboxList = [];
            this.inboxData.PageIndex = 1;
            this._getInboxList(this.inboxData);
        } else {
            this.outboxList = [];
            this.outboxData.PageIndex = 1;
            this._getOutboxList(this.outboxData);
        }
    }

    doInfinite(): Promise<any> {
        if (this.moredata) {
            if (this.box === "inbox") {
                this.inboxData.PageIndex++;
                this._getInboxList(this.inboxData);
            } else {
                this.outboxData.PageIndex++;
                this._getOutboxList(this.outboxData);
            }
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    getNewInboxList(inboxData){
        inboxData.PageIndex = 1;
        this.mailService.getInboxList(inboxData).subscribe(list => {
            if (list.Result == true ) {
                let arr = list.Data.filter(item => {
                    return item.Id !== this.inboxList[0].Id;
                });
                if (arr !== []) {
                    this.inboxList = [...this.inboxList, ...arr];
                }
            }
        });
    }


    _getInboxList(inboxData) {
        this.mailService.getInboxList(inboxData).subscribe(resJson => {
            if (resJson.Result && resJson.Data !== []){
                this.isEmpty = false;
                let list = resJson.Data;
                this.inboxList = [...this.inboxList, ...list];
            }else{
                this.moredata = false;
                if (this.inboxData.PageIndex === 1) {
                    this.isEmpty = true;
                    this.inboxList = [];
                }
            }
        });
    }

    _getOutboxList(outboxData) {
        this.mailService.getOutboxList(outboxData).subscribe(resJson => {
            if (resJson.Result && resJson.Data !== []){
                this.isEmpty = false;
                let list = resJson.Data;
                this.outboxList = [...this.outboxList, ...list];
            }else{
                this.moredata = false;
                if (this.outboxData.PageIndex === 1) {
                    this.isEmpty = true;
                    this.outboxList = [];
                }
            }
        });
    }

}
