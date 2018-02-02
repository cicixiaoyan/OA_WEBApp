import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, Content } from 'ionic-angular';
import { GlobalData } from "../../providers/GlobalData";
import { NativeService } from "../../providers/NativeService";
import { MailService } from "./mailService";
@IonicPage()
@Component({
    selector: 'page-mail',
    templateUrl: 'mail.html',
})
export class Mail {
    @ViewChild(Content) content: Content;
    pageSlides: Array<string> = ["未读", "已读"];

    box: string = "inbox";
    isEmpty: boolean = false;
    list: any = [];
    moredata: boolean = true;
    data: any;

    canclick: boolean = true;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public globalData: GlobalData,
                private nativeService: NativeService,
                private mailService: MailService) {
        
    }

    ionViewWillEnter() {
        this.box = "inbox";
        this.data = {
            "PageSize": 8,
            "PageIndex": 0,
            "MailStatus": this.mailService.mailStatus["inbox"],
            "Uid": this.globalData.Uid,
            "Status": this.mailService.status["unread"]
        };
        this.list = [];
        this._getList(this.data);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Mail');
    }

    // 选择已读、未读
    onSlideClick(i: number){
        this.data.PageIndex = 0;
        this.list = [];
        if (i === 0) {
            this.data.Status = this.mailService.status["unread"];
        }
        else if (i === 1) {
            this.data.Status = this.mailService.status["read"];
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
        console.log("刷新页面", this.canclick);
        if (!this.canclick){
            // this.box = this.box === "inbox" ? "outbox" : "intbox";
            console.log("不能点击");
            this.box = this.data.MailStatus == this.mailService.mailStatus["inbox"] ? "inbox" : "outbox";
            this.nativeService.showToast("点击太快了，请稍后！！！", 800);
            setTimeout(() => {
                refresher && refresher.complete();
            }, 300);
        }else{
            console.log("可以点击");
            this.moredata = true;
            this.canclick = false;
            this.list = [];
            this.data.PageIndex = 0;
            this.content.resize();

            if (this.box === "inbox") {
                this.data.MailStatus = this.mailService.mailStatus["inbox"];
            } else {
                this.data.MailStatus = this.mailService.mailStatus["outbox"];
            }
            this._getList(this.data);
        }

        
        setTimeout(() => {
            console.log('数据加载完成');
            this.canclick = true;
            refresher && refresher.complete();
        }, 2000);
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
