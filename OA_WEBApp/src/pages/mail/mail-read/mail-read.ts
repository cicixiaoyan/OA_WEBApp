import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";
import { MailService } from '../mailService';
/**
 * Generated class for the MailRead page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-mail-read',
    templateUrl: 'mail-read.html'
})
export class MailRead {
    @ViewChild(Content) content: Content;
    mailContent: string = ""; // 消息内容
    mailDetail: any = {};
    IsInbox: boolean = true; // 默认为收件箱详情
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private nativeService: NativeService,
                private modalCtrl: ModalController,
                private mailService: MailService) {
        this.initializeItems();
    }

    initializeItems() {
        let data = {
            "id": this.navParams.get('id'),
            "MailStatus": this.navParams.get("MailStatus")
        };
        if (data.MailStatus == this.mailService.mailStatus["outbox"]) this.IsInbox = false;
        this.mailService.read(data).subscribe((resJson) => {
            if (resJson.Result){
                this.mailDetail = resJson.Data;
                console.log(resJson);
                this.mailDetail.Name = this.mailDetail.Name.split(":")[1];
            }
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MailRead');
        this.content.resize();
    }

    ionViewWillLeave() {

    }

    read() {
        let modal = this.modalCtrl.create("MailWrite", { mail: this.mailDetail });
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
    }

    download(Path, name) {
        this.nativeService.download(Path, name);
    }
}
