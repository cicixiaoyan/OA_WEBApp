import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";
import { MailService } from '../mailService';
import { GlobalData } from '../../../providers/GlobalData';
import { UPLOAD_PATH } from "../../../providers/Constants";
import { FileService } from '../../../providers/FileService';

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
    mailDetail: any = {
        AttachLs: []
    };
    isInbox: boolean = true; // 默认为收件箱详情
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public globalData: GlobalData,
                private nativeService: NativeService,
                private fileService: FileService,
                private modalCtrl: ModalController,
                private mailService: MailService) {
        this.isInbox = this.navParams.get("MailStatus") == this.mailService.status["inbox"];
        this.initializeItems();
    }

    initializeItems() {
        let data = {
            "id": this.navParams.get('id'),
            "MailStatus": this.navParams.get("MailStatus")
        };
        // if (data.MailStatus == this.mailService.mailStatus["outbox"]) this.isInbox = false;
        this.mailService.read(data).subscribe((resJson) => {
            if (resJson.Result && resJson.Data.length != 0){
                this.mailDetail = resJson.Data[0];
                // this.mailDetail.Name = this.mailDetail.Name.split(":")[1];
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

    download(path, name) {
        // const target = path.split("/").pop();
        // let url = "http://192.168.0.49:789/Attach/flow/Work/201111302315473908417.pdf";
        let url = this.globalData.FILE_SERVE_URL + UPLOAD_PATH.mail + path;
        this.fileService.download1(url, path).subscribe((path) => {
          this.fileService.openFile(path).subscribe(() => {
            
          });
        });
    }
}
