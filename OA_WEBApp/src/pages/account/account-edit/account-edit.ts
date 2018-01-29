import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { UserInfo } from "../../../model/UserInfo";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HttpService } from '../../../providers/HttpService';
import { Utils } from "../../../providers/Utils";

@IonicPage()
@Component({
    selector: 'page-account-edit',
    templateUrl: 'account-edit.html',
})
export class AccountEdit {

    userInfo: UserInfo = new UserInfo();
    editForm: any;
    submitted: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private actionSheetCtrl: ActionSheetController,
                public storage: Storage,
                private httpService: HttpService,
                private modalCtrl: ModalController,
                private formBuilder: FormBuilder) {

        this.editForm = this.formBuilder.group({
            InDate: ['', [Validators.required, Validators.minLength(4)]], // 第一个参数是默认值
            Sex: ['男', [Validators.required, Validators.minLength(2)]],
            BirthDate: [null, []],
            Mobile: [null, [Validators.minLength(11), Validators.maxLength(11)]],
            Mail: [null, [Validators.email]],
            WorkPhone: [null, [Validators.maxLength(11)]],
            InlinePhone: [null, [Validators.maxLength(11)]]
        });

        this.initialize();
    }

    initialize() {
        this.storage.get("UserInfo").then((UserInfo) => {
            if (UserInfo){
                this.userInfo = UserInfo;
                this.userInfo.BirthDate = UserInfo.BirthDate !== "" ?
                Utils.dateFormat(new Date(UserInfo.BirthDate), 'yyyy-MM-dd') : "";
            }else{
                let modal = this.modalCtrl.create("LoginPage");
                modal.present();
                modal.onDidDismiss(data => {
                    if (!!data) this.userInfo = data;
                });
            }
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AccountEdit');
    }

    // 性别选择
    checkSex() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '选择性别',
            buttons: [
                {
                    text: '男',
                    role: 'destructive',
                    handler: () => {
                        this.userInfo.Sex = "男";
                    }
                }, {
                    text: '女',
                    handler: () => {
                        this.userInfo.Sex = "女";
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('已取消');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    edit(value) {
        // this.submitted = true;
        // console.log(value);
        value.Uid = this.httpService.globalData.Uid;
        this.httpService.postFormData("ashx/UserPersonMod.ashx", value)
        .map(responce => responce.json())
        .subscribe((Resjson) => {
            if (Resjson.Result){
                this.httpService.nativeService.showToast("修改资料成功", 800);
                this.storage.set("UserInfo", this.userInfo);
                this.navCtrl.pop();
            }else{
                this.httpService.nativeService.showToast("修改资料失败： " + Resjson.Data, 800);
            }
        });
    }

    return(){
        this.navCtrl.pop();
    }


}
