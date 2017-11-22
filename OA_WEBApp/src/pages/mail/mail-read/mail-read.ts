import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";
import { MailWrite } from '../mail-write/mail-write';

import { Transfer } from '@ionic-native/transfer'; // , FileUploadOptions, TransferObject
import { File } from '@ionic-native/file';

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
    mailDetail: any = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private nativeService: NativeService,
                private modalCtrl: ModalController,
                private transfer: Transfer, 
                private mailService: MailService,
                private file: File) {
        this.initializeItems();
    }

    initializeItems() {
        
        this.mailService.read(this.navParams.get('id')).subscribe((resJson) => {
            if (resJson.Result){
                this.mailDetail = resJson.Data;
            }
        });

        this.mailDetail = {
            jsyjid: "2",
            jsbt: "信息主题2", // 接受标题
            fsrName: "系统管理员", // 发送人姓名
            fsrID: "121", // 发送人id
            fssj: "2012-12-12 12:12:12", // 接收时间
            jssj: "2012-12-12 12:12:12", // 发送时间
            jsrIDs: "123,456,789", // 接收人ids
            jsnr: "你该交作业了2", // 接受内容
            attName: "236.png",
            yjfj: "236.png", // --邮件附件
            jszt: "未读", // 状态
            msbz: "是"
        };
        this.mailContent = this.mailDetail.ggnr;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MailRead');
        this.content.resize();
    }

    ionViewWillLeave() {

    }

    read() {
        let modal = this.modalCtrl.create(MailWrite, { mail: this.mailDetail });
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
    }

    download(Path) {
        let path = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png";
        const target = path.split("/").pop(); // target为文件名字
        this.nativeService.download(path, target);
        //   this.transfer.create().download(encodeURI(path), this.file.externalDataDirectory + 'file.png')
        // .then((entry) => {
        //   console.log('download complete: ' + entry.toURL());
        // }, (error) => {
        //   // handle error
        // });
    }

}
