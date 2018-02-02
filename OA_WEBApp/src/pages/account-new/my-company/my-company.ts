import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { UserInfo } from "../../../model/UserInfo";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-my-company',
  templateUrl: 'my-company.html',
})
export class MyCompanyPage {

  userInfo: UserInfo = new UserInfo();

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private actionSheetCtrl: ActionSheetController,
                public storage: Storage,
                private modalCtrl: ModalController) {

        this.initialize();
    }

    initialize() {
        this.storage.get("UserInfo").then((UserInfo) => {
            if (UserInfo){
                this.userInfo = UserInfo;
            }else{
                let modal = this.modalCtrl.create("LoginPage");
                modal.present();
                modal.onDidDismiss(data => {
                    if (!!data) this.userInfo = data;
                });
            }
        });
    }

}
