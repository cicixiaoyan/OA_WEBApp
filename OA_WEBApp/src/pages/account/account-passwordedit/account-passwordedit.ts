import {Component} from '@angular/core';
import {IonicPage,NavController, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LoginPage} from './../../login/login';
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

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.editPasswordForm = this.formBuilder.group({
      oldPassword: [, [Validators.required, Validators.minLength(3)]],
      nwePassword: [, [Validators.required, Validators.minLength(3)]],
      confirmPassword: [, [Validators.required, Validators.minLength(3)]]
    });
  };

  confirm() {
    this.navCtrl.setRoot(LoginPage)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
