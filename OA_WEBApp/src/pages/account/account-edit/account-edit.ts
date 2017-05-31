import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { UserInfo } from "../../../model/UserInfo";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


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
        private formBuilder: FormBuilder) {

        this.editForm = this.formBuilder.group({
            ui_rzrq: ['admin', [Validators.required, Validators.minLength(4)]], // 第一个参数是默认值
            ui_sex: ['123', [Validators.required, Validators.minLength(2)]],
            ui_csrq: [],
            ui_yddx: [],
            ui_mail: [],
            ui_bgdh: [],
            ui_czdh: []
        });

        this.initialize();
    }

    initialize() {
        this.userInfo.ui_csrq = "1990-02-19";
        this.userInfo.ui_rzrq = "1990-02-19";
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
                        this.userInfo.ui_sex = "男";
                    }
                }, {
                    text: '女',
                    handler: () => {
                        this.userInfo.ui_sex = "女";
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


}
