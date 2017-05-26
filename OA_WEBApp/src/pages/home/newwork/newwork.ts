import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewworkDetail } from './newwork-detail/newwork-detail';

/**
 * Generated class for the Newwork page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-newwork',
  templateUrl: 'newwork.html',
})
export class Newwork {
  items = [{
            wfName: "测试工作流1",
            wfNo: "2", // 工作编号
            FK_fid: "1234" // 表单id

        },
        {
            wfName: "测试工作流2",
            wfNo: "2", // 工作编号
            FK_fid: "1234" // 表单id

        },
        {
            wfName: "测试工作流3",
            wfNo: "2", // 工作编号
            FK_fid: "1234" // 表单id

        }
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newwork');
  }

  addNew(id){
    this.navCtrl.push(NewworkDetail, {id: id});
  }

}
