import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { UserInfo } from "../../../model/UserInfo";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoginPage } from "../../login/login";
/**
 * Generated class for the AccountEdit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
                private storage: Storage,
                private modalCtrl: ModalController,
                private formBuilder: FormBuilder) {

        this.editForm = this.formBuilder.group({
            InDate: ['1990-02-19', [Validators.required, Validators.minLength(4)]], // 第一个参数是默认值
            Sex: ['男', [Validators.required, Validators.minLength(2)]],
            BirthDate: [],
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
            }else{
                let modal = this.modalCtrl.create(LoginPage);
                modal.present();
                modal.onDidDismiss(data => {
                    data && console.log(data);
                });
            }
            
        });
        this.userInfo.BirthDate = "1990-02-19";
        this.userInfo.InDate = "1990-02-19";
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
        this.submitted = true;
        console.log(value);
    }

    return(){
        this.navCtrl.pop();
    }


}
