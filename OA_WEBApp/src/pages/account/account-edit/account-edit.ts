import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

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
  
   public event = {
    ui_csrq: '1990-02-19',
    ui_rzrq: '1990-02-19'
  };
  ui_sex: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private actionSheetCtrl: ActionSheetController) {
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
            this.ui_sex = "男";
          }
        }, {
          text: '女',
          handler: () => {
            this.ui_sex = "女";
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


}
