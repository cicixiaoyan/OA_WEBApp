import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, ModalController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginPage } from '../../login/login';
import { HttpService } from '../../../providers/HttpService';
/**
 * Generated class for the AccountPasswordedit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-account-passwordedit',
    templateUrl: 'account-passwordedit.html',
})
export class AccountPasswordedit {
    editPasswordForm: FormGroup;
    oldPwd: string;
    newPwd: string;

    constructor(private navCtrl: NavController,
                private viewCtrl: ViewController,
                private modalCtrl: ModalController,
                private httpService: HttpService,
                private formBuilder: FormBuilder) {
        this.editPasswordForm = this.formBuilder.group({
            oldPwd: [, [Validators.required, Validators.minLength(3)]],
            newPwd: [, [Validators.required, Validators.minLength(3)]],
            confirmPassword: [, [Validators.required, Validators.minLength(3)]]
        });
    }

    confirm() {
        let param = {oldPwd: this.oldPwd, newPwd: this.newPwd};
        this.httpService.postFormData("ashx/PwdMod.ashx", param)
            .map(responce => responce.json())
            .subscribe((Resjson) => {
                if (Resjson.result){
                    let modal = this.modalCtrl.create(LoginPage);
                    modal.present();
                    modal.onDidDismiss(data => {
                        data && console.log(data);
                    });
                }else{

                }

            });
        
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }


}
