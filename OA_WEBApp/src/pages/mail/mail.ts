import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';

import { MailRead } from '../mail/mail-read/mail-read';
import { MailWrite } from '../mail/mail-write/mail-write';
import { MailReadOutbox } from '../mail/mail-read-outbox/mail-read-outbox';
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
        private modalCtrl: ModalController,
        private mailService: MailService) {
        this.inboxData = { "size": 1, "page": 0 };
        this.outboxData = { "size": 1, "page": 0 };
        this.initializeItems();
    }

    initializeItems() {
        this._getInboxList(this.inboxData);
        this._getOutboxList(this.outboxData);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Mail');
    }

    // 选择已读、未读、全部
    checkRead(name: string = "unread") {
        this.inboxData.page = 1;
        this.inboxList = [];
        this.checkBtn = { "read": false, "unread": false, "all": false };
        this.checkBtn[name] = true;
        if (name === "unread") {
            // 参数设置
        }
        else if (name === "read") {
            // 参数设置
        }
        else {
            // 参数设置
        }
        this._getInboxList(this.inboxData);
    }

    // 选择草稿箱、发件箱
    checkDraft(bol: boolean = false) {
        this.outboxData.page = 1;
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
        this.navCtrl.push(MailRead, { id: id });
    }

    doReadOutBox(id) {
        this.navCtrl.push(MailReadOutbox, { id: id });
    }

    doWrite() {
        let modal = this.modalCtrl.create(MailWrite);
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
        // this.navCtrl.push(MailWrite);
    }

    doRefresh(refresher: Refresher) {
        console.log("加载更多");
        // this.initializeItems();
        this.moredata = true;
        if (this.box === "inbox") {
            this.inboxList = [];
            this.inboxData.page = 1;
            this._getInboxList(this.inboxData);
        } else {
            this.outboxList = [];
            this.outboxData.page = 1;
            this._getOutboxList(this.outboxData);
        }

        setTimeout(() => {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    }

    doInfinite(): Promise<any> {
        if (this.moredata) {
            if (this.box === "inbox") {
                this.inboxData.page++;
                this._getInboxList(this.inboxData);
            } else {
                this.outboxData.page++;
                this._getOutboxList(this.outboxData);
            }
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    _getInboxList(inboxData) {
        this.mailService.getInboxList(inboxData).subscribe(list => {
            if (list === []) {
                this.moredata = false;
            } else {
                this.inboxList = this.inboxList.concat(list);
            }
        });
    }

    _getOutboxList(outboxData) {
        this.mailService.getOutboxList(outboxData).subscribe(list => {
            if (list === []) {
                this.moredata = false;
            } else {
                this.outboxList = this.outboxList.concat(list);
            }
        });
    }

}
