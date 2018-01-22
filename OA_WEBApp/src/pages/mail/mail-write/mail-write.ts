import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,
    AlertController, PopoverController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileService } from "../../../providers/FileService";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MailService } from "../mailService";
import { Utils } from '../../../providers/Utils';



/**
 * Generated class for the MailWrite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-mail-write',
    templateUrl: 'mail-write.html',
})
export class MailWrite {
    imageBase64: string;
    affixPath: string;
    addressee: string = "";
    addresseeIds: string = "";
    attName: string = "";
    attNo: string = "";
    fsbt: "主题";
    haveAffix: boolean = false;
    attLength: string = "0";

    writeForm: FormGroup;
    @ViewChild("popoverContent", { read: ElementRef }) content: ElementRef;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private popoverCtrl: PopoverController,
                private fileService: FileService,
                public nativeService: NativeService,
                private alertCtrl: AlertController,
                private viewCtrl: ViewController,
                private globalData: GlobalData,
                private mailService: MailService,
                private formBuilder: FormBuilder) {

        this.writeForm = this.formBuilder.group({
            addressee: ['', [Validators.required]],
            Title: ['', []],
            Level: ["普通", []],
            Bcc: [false, []],
            Content: ["", [Validators.maxLength(180)]],
        });

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

    sent(data) {
        console.log(data);
        let data1 =  {
            "AccessPresonId": this.addresseeIds,
            "AccessPerson": data.addressee,
            "Title": data.Title,
            "Content": data.Content,
            "Level": data.Level,
            "Bcc": data.Bcc ? '是' : "否",
            "AttNo": this.attNo,
            "UserId": this.globalData.Uid,
            "UserName": this.globalData.Name
        };

        this.mailService.write(data1).subscribe((resJson) => {
            if (!resJson.Result) return this.nativeService.showToast(resJson.Data);

            this.nativeService.showToast("信息已发送") ;
            this.navCtrl.pop();
            
        });

    }

    addAffix() {
        this.fileService.uploadAffix(1).subscribe(data => {
            console.log(data, "上传成功");
            this.haveAffix = true;
            let Data = JSON.parse(data.response).Data;
            this.attName = Data[0].OldName;
            this.attNo = Data[0].AttNo;
        });
    }

    checkPeople(myEvent) {
        let popover = this.popoverCtrl.create("ContactsPopoverPage",
            { addressee: this.addressee, addresseeIds: this.addresseeIds });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(data => {
            if (!!data) {
                console.log(data);
                // {addressee:this.addressee,addresseeIds:this.addresseeIds}
                this.addresseeIds = data.addresseeIds;                
                this.writeForm.patchValue({'addressee': data.addressee});
            }

        });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    deleteAffix(){
        this.haveAffix = false;
        this.attName = "";
        this.attNo = "";
        this.attLength = "0";
    }


}




