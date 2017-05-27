import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";
import { MailWrite } from '../mail-write/mail-write';

/**
 * Generated class for the MailReadOutbox page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-mail-read-outbox',
    templateUrl: 'mail-read-outbox.html',
})
export class MailReadOutbox {
    @ViewChild(Content) content: Content;
    mailContent: string = "";//消息内容
    mailDetail: any = [];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private nativeService: NativeService,
        private modalCtrl: ModalController) {
        this.initializeItems();
    }

    initializeItems() {
        // let data={id: this.navParams.get('id'),action:"noticeById"};
        // this.httpService.postFormData("ashx/Notice.ashx/noticeById",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //       if(!!list && list.length != 0 ){
        //         this.detailNotice = list[0];
        //         this.myDiv = this.detailNotice.ggnr;
        //       }else{
        //          this.toastCtrl.create({
        //           message: '服务器出错，请稍后再试！！！',
        //           position: 'middle',
        //           duration: 2000
        //         }).present();
        //         this.navCtrl.pop();
        //       }
        //   });

        this.mailDetail = {
            jsyjid: "2",
            jsbt: "信息主题2", //接受标题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "你该交作业了2", //接受内容
            attName: "236.png",
            yjfj: "236.png", //--邮件附件
            jszt: "未读", //状态
            msbz: "是"//密送标志
        }
        this.mailContent = this.mailDetail.ggnr;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MailRead');
        this.content.resize();
    }

    ionViewWillLeave() {

    }

    read() {
        let modal = this.modalCtrl.create(MailWrite);
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
    }

    download(path) {
        const target = path.split("/").pop();
        this.nativeService.download(path, target);
    }

}
