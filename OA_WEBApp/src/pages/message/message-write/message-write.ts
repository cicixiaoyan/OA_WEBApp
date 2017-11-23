import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, PopoverController, ViewController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileObj } from "../../../model/FileObj";

import { MessageService } from "../messageService";
import { ContactsPopoverPage } from '../../contacts-popover/contacts-popover';

/**
 * Generated class for the MessageWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
    selector: 'page-message-write',
    templateUrl: 'message-write.html',
})

export class MessageWritePage {
    // avatarPath: string;
    imageBase64: string;
    affixPath: string;
    addressee: string = "";
    addresseeIds: string = "";
    attName: string = "109.png";
    fsbt: "主题";
    msbz: boolean = false; // 密送标志
    // mailObj : object = {};
    @ViewChild("popoverContent", { read: ElementRef }) content: ElementRef;
    constructor(public navParams: NavParams,
                public nativeService: NativeService,
                private popoverCtrl: PopoverController,
                private viewCtrl: ViewController,
                private messageService: MessageService) {
        // console.log(this.navParams.get("mail"));
        let mail = this.navParams.get("mail");
        if (typeof (mail) !== "undefined") {
            this.affixPath = mail.yjfj;
            this.fsbt = mail.jsbt;
        }
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad MailWrite");
    }

    send() {
        let data =  {
            "Uid": this.messageService.httpService.globalData.Uid,
            "AcceptUid": this.addresseeIds,
            "Content": this.content
        };

        this.messageService.write(data).subscribe((resJson) => {
            resJson.Result ? this.nativeService.showToast("信息已发送") :
            this.nativeService.showToast(resJson.Data);
        });

    }

    checkPeople(myEvent) {

        let popover = this.popoverCtrl.create(ContactsPopoverPage,
            { addressee: this.addressee, addresseeIds: this.addresseeIds });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(data => {
            if (!!data) {
                console.log(data);
                // {addressee:this.addressee,addresseeIds:this.addresseeIds}
                this.addressee = data.addressee;
                this.addresseeIds = data.addresseeIds;
            }

        });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }


}
